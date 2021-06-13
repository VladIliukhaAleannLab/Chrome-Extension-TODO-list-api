const { User } = require('../schemas/init');

const getRandomInt = () => {
    const min = 1;
    const max = 99999;
    return (Math.floor(Math.random() * (max - min)) + min) * (Math.floor(Math.random() * (max - min)) + min);
};

const authUser = async (req, res) => {
    const {name, password, isCreate} = req.body;
    const user = await User.findOne({name, password});

    if (isCreate) {
        if (user) {
            res.json({name, isLogin: false, message: 'already exist'})
        } else {
            const newUser = new User({name, password, isAdmin: false, uid: getRandomInt()});
            newUser.save();
            res.json({newUser, isLogin: true})
        }
    } else {
        const user = await User.findOne({name, password});
        if (user) {
            res.json({...user['_doc'], isLogin: true})
        } else {
            res.json({name, isLogin: false, message: 'wrong name or password'})
        }
    }
};

module.exports = {
    authUser
};