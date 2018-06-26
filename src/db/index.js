const mongoose = require('mongoose')
const Feed = require('./feed.post.js')

// Set Up Mongoose Promises
mongoose.Promise = global.Promise

exports.startDB = ({ user, pwd, url, db }) => mongoose.connect(`mongodb://${user}:${pwd}@${url}/${db}`)

exports.models = {
    Feed,
}