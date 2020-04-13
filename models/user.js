const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    externalId: String,
    name: String,
    calledUser: String,
    date: Date, 
    comment: String
});

module.exports = mongoose.model('users', userSchema );