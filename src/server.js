
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('../prisma/generated/prisma-client')
const { buildFederatedSchema } = require('@apollo/federation')

const typeDefs = require('./schema')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const ReviewerListing = require('./resolvers/ReviewerListing')
const ResumeReview = require('./resolvers/ResumeReview')

const resolvers = {
    Query,
    Mutation,
    ReviewerListing,
    ResumeReview,
}

const server = new GraphQLServer({
    schema: buildFederatedSchema([
        {
            typeDefs,
            resolvers,
        },
    ]),
    context: request => {
        return { ...request, prisma}
    },
})

module.exports = server