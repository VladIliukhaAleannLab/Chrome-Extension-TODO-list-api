const axios = require('axios');

const testData = [
    {
        user: 'Jolly Roger',
        items: [
            {
                "id": "532784",
                "createDate": "Sun Jun 13 2021 16:11:26 GMT+0300 (за східноєвропейським літнім часом)",
                "updateDate": "Sun Jun 13 2021 16:11:36 GMT+0300 (за східноєвропейським літнім часом)",
                "text": "12312312312312312",
                "user": "Jolly Roger",
                "type": "Todo",
                "__v": 0
            },
            {
                "id": "362580",
                "createDate": "Sun Jun 13 2021 16:11:26 GMT+0300 (за східноєвропейським літнім часом)",
                "updateDate": "Sun Jun 13 2021 16:12:26 GMT+0300 (за східноєвропейським літнім часом)",
                "text": "укук2",
                "user": "Jolly Roger",
                "type": "Todo",
                "__v": 0
            },
            {
                "id": "94448",
                "createDate": "Sun Jun 13 2021 16:11:26 GMT+0300 (за східноєвропейським літнім часом)",
                "updateDate": "Sun Jun 13 2021 16:13:26 GMT+0300 (за східноєвропейським літнім часом)",
                "text": "уцаі2",
                "user": "Jolly Roger",
                "type": "In progress",
                "__v": 0
            },
            {
                "id": "695466",
                "createDate": "Sun Jun 13 2021 16:11:26 GMT+0300 (за східноєвропейським літнім часом)",
                "updateDate": "Sun Jun 13 2021 16:14:26 GMT+0300 (за східноєвропейським літнім часом)",
                "text": "уцукв2",
                "user": "Jolly Roger",
                "type": "Complete",
                "__v": 0
            }
        ]
    },

];

const testList = async (data) => {
    const url = 'http://localhost:8000/api/v1/sync-list';
    for (const el of data) {
        const res = await axios['post'](url, {user: el.user, items: el.items});
        console.log(res);
    }
};

testList(testData).then();