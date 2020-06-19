let mongoose = require('mongoose')

let transmodel = new mongoose.Schema({
    pubKey: String,
    date: String,
    ListpersonId: [""],
    VoteId: String,
    personId:Number,
    signature:String

})


module.exports = mongoose.model('transactions', transmodel)