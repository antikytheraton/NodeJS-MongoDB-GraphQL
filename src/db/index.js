const mongoose = require('mongoose')
const Feed = require('./feed.post.js')

// Set Up Mongoose Promises
mongoose.Promise = global.Promise

exports.startDB = ({ user, pwd, uri, db }) => mongoose.connect(`mongodb://${user}:${pwd}@${uri}/${db}`)

exports.models = {
    Feed,
}