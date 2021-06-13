const { Item } = require('../schemas/init');
const _ = require('lodash');
const {createItem, updateItem, deleteItem} = require('./item');

const getSyncList = async (user, webItems) => {
    const items = await Item.find({user});
    let assignItems = [...webItems, ...items.map(el => el['_doc'])];
    const syncItems = [];
    _.uniqBy(assignItems, 'id').map((el) => {
        const webEl = webItems.find(e => `${e.id}` === `${el.id}`);
        const libEl = items.map(el => el['_doc']).find(e => `${e.id}` === `${el.id}`);
        if (!webEl && libEl && !libEl.isAdminCreate) {
            deleteItem({id: libEl.id, user: libEl.user});
            return
        }
        if (!webEl?.updateDate && !libEl?.updateDate) {
            syncItems.push(webEl);
        } else if (webEl?.updateDate && libEl?.updateDate){
            if (new Date(webEl.updateDate) >= libEl.updateDate) {
                syncItems.push(webEl);
            } else {
                syncItems.push(libEl);
            }
        } else if (webEl?.updateDate && !libEl?.updateDate) {
            syncItems.push(webEl);
        } else if (!webEl?.updateDate && libEl?.updateDate) {
            syncItems.push(libEl);
        }
    });
    // const syncItems = _.uniqBy(assignItems, 'id');
    const newItems = syncItems.filter((item) => !(items.find((el) => el.id === item.id)));


    newItems.forEach(async (item) => {
        await createItem(item)
    });
    syncItems.forEach(async (item) => {
        await updateItem(item)
    });

    const initList = [
        {
            id: 'Todo',
            items: []
        },
        {
            id: 'In progress',
            items: []
        },
        {
            id: 'Complete',
            items: []
        }
    ];

    const _index = {
        'Todo': 0,
        'In progress': 1,
        'Complete': 2,
    };
    syncItems.forEach((el) => {
        initList[_index[el.type]].items.push(el)
    });
    return {list: initList, isSync: true}
};


const getSyncListView = async (req, res) => {
    try {
        const {user, items} = req.body;
        const {isSync, list} = await getSyncList(user, items);
        res.json({
            status: true,
            list,
            isSync
        })

    } catch (e) {
        res.json({status: false})
    }
};

module.exports = {
    getSyncListView
};