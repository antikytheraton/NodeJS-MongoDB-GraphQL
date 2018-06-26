const mongoose = require('mongoose')

const FeedSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        unique: true,
    },
    url: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Feed', FeedSchema)
