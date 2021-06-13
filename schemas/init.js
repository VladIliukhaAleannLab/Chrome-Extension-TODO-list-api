const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = require('./UserSchema');
const User = new Schema (UserSchema);
User.set(`toJSON`, {
    virtuals: true
});

const ItemSchema = require('./ItemSchema');
const Item = new Schema (ItemSchema);
Item.set(`toJSON`, {
    virtuals: true
});

module.exports = {
    User: mongoose.model('User', User),
    Item: mongoose.model('Item', Item)
};