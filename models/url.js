const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    urlCode : String,
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: String
}, { timestamps: true})

module.exports = mongoose.model('Url', urlSchema)