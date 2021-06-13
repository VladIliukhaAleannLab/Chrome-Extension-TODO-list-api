const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost:27017/ext-todo', {useNewUrlParser: true, useUnifiedTopology: true});
    const mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'connection error:'));
    mongodb.once('open', function() {
        console.log('mongodb connected: ' + mongodb.name)
    });
};

exports.connect = connect;