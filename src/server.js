
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('../prisma/generated/prisma-client')
const { buildFederatedSchema } = require('@apollo/federation')

const typeDefs = require('./schema')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const ReviewerListing = require('./resolvers/ReviewerListing')
const ResumeReview = require('./resolvers/ResumeReview')
const User = require('./resolvers/User')

const resolvers = {
    Query,
    Mutation,
    ReviewerListing,
    ResumeReview,
    User,
}

const server = new GraphQLServer({
    schema: buildFederatedSchema([
        {
            typeDefs,
            resolvers,
        },
    ]),
    context: request => {
        return { ...request, prisma }
    },
})

module.exports = server
