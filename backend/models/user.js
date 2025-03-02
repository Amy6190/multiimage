const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: String,
    description: String,
    images : [String],
})

module.exports = mongoose.model('Property',User)