'use strict'
const { GraphQLServer } = require('graphql-yoga')
const { startDB, models } = require('./db')
const resolvers = require('./graphql/resolvers')
// const typeDefs = require('./graphql/typeDefs')
// const resolvers = require('./graphql/resolvers')

const db = startDB({
    user: 'graphql',
    pwd: 'yoga123',
    db: 'graphqlYoga',
    url: 'localhost:27017'
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
