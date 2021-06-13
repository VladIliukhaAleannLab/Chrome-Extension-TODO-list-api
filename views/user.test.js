const axios = require('axios');

const testData = [
    {
        name: 'Jolly Roger',
        password: '12345',
        isCreate: true
    },
    {
        name: 'Jolly Roger',
        password: '12345678'
    },
    {
        name: 'Jolly Roger',
        password: '12345'
    }
];

const testUser = async (data) => {
    const url = 'http://localhost:8000/api/v1/auth';
    for (const el of data) {
        const res = await axios.post(url, el);
        console.log(res.data.message);
    }
};

testUser(testData).then();