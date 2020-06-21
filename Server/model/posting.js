let mongoose = require('mongoose')

let posting = new mongoose.Schema({
    content: String,
    title: String,
    ListpersonId: [""],
    delete: Boolean,
    startDay:String,
    endDay:String
})


module.exports = mongoose.model('postings', posting)