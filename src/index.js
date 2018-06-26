'use strict'
const { GraphQLServer } = require('graphql-yoga')
const { startDB, models } = require('./db')
const resolvers = require('./graphql/resolvers')
require('dotenv').config()

const db = startDB({
    user: process.env.DB_USER,
    pwd: process.env.DB_PWD,
    db: process.env.MONGO_DB,
    uri: process.env.DB_URI
})

const context = {
    models,
    db,
}

const opts = {
    port: process.env.PORT || 4000,
}

const server = new GraphQLServer({
    typeDefs: `${__dirname}/graphql/schema.graphql`,
    resolvers,
    context,
})
server.start(opts, () => console.log(`Server is running on http://localhost:${opts.port}`))
