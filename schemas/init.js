const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = require('./UserSchema');
const User = new Schema (UserSchema);
User.set(`toJSON`, {
    virtuals: true
});

module.exports = {
    User: mongoose.model('User', User),
};