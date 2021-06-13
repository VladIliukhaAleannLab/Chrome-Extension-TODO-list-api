const { Item } = require('../schemas/init');

const createItem = async (item) => {
    const newItem = new Item(item);
    await newItem.save();
};

const updateItem = async (updateItem) => {
    const item = await Item.findOne({id: updateItem.id, user: updateItem.user});
    item.info = updateItem.info;
    item.updateDate = updateItem.updateDate;
    item.text = updateItem.text;
    item.type = updateItem.type;
    await item.save();
};

const deleteItem = async (item) => {
    const deleted = await Item.remove(item);
    return !!deleted.n
};

const createItemView = async (req, res) => {
    try {
        const {item} = req.body;
        await createItem(item);
        res.json({status: true})
    } catch (e) {
        res.json({status: false})
    }
};

const updateItemView = async (req, res) => {
    try {
        const {item} = req.body;
        await updateItem(item);
        res.json({status: true})
    } catch (e) {
        res.json({status: false})
    }
};

const deleteItemView = async (req, res) => {
    try {
        await deleteItem(req.query);
        res.json({status: true})
    } catch (e) {
        res.json({status: false})
    }
};

module.exports = {
    createItemView,
    updateItemView,
    deleteItemView
};