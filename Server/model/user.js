let mongoose = require('mongoose')

let user = new mongoose.Schema({
    usermane: String,
    publicKey: String,
})


module.exports = mongoose.model('user', user)