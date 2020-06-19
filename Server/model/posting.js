let mongoose = require('mongoose')

let posting = new mongoose.Schema({
    content: String,
    title: String,
    ListpersonId: [""],
    delete: false,
})


module.exports = mongoose.model('postings', posting)