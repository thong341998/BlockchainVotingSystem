let mongoose = require('mongoose')
// let transactions = require("./transaction")
let blockmodel = new mongoose.Schema({
    previousHash: String,
    timestamp: String,
    hash: String,
    nonce: Number,
    transactions:[]

})


module.exports = mongoose.model('blocks', blockmodel)