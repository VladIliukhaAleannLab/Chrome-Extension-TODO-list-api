const axios = require('axios');

const testData = [
    {
        type: 'post',
        item: {
            id: '123456',
            createDate: new Date().toString(),
            text: 'test1',
            user: 'test user',
            type: 'todo'
        }
    },
    {
        type: 'put',
        item: {
            id: '123456',
            text: 'test12',
            user: 'test user',
            type: 'complete',
            info: 'test info',
            updateDate: new Date().toString(),
        }
    },
    {
        type: 'delete',
        item: {
            id: '123456',
            text: 'test12',
            user: 'test user',
            type: 'complete',
            info: 'test info',
            updateDate: new Date().toString(),
        }
    },
];

const testItem = async (data) => {
    const url = 'http://localhost:8000/api/v1/item';
    for (const el of data) {

        const res = el.type === 'delete' ?
            await axios[el.type](`${url}?id=${el.item.id}&user=${el.item.user}`)
            :
            await axios[el.type](url, {item: el.item});
        console.log(res);
    }
};

testItem(testData).then();