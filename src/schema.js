const { gql } = require('apollo-server')

const typeDefs = gql`

extend type Query{
    resumeQinfo: String!
    rqposts(
        industry: String
        price: String
        orderBy: String
        tags: String
        ids: [String]
    ): [rqPost!]!
    rqpost(id: String!): rqPost!
    rqpostByCoach(coach_id: String!): rqPost!
    rqindustries: [Industry!]
    rqindustry(name: String!): [rqPost!]!
}

type Mutation{
    createrqPost(
        price: Int!
        position: String!
        industryName: String!
        description: String!
    ): rqPost!

    deleterqPost(id: String!): rqPost!

    updaterqPost(
        id: String!
        price: Int
        position: String
        industryName: String
        description: String
    ): rqPost!

    removeTagFromrqPost(id: ID!, tagID: String): rqPost!
}

scalar DateTime

type rqPost{
    id: ID!
    price: Int
    position: String
    industry: Industry
    description: String!
    reviewerID: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    company: String
    isPublished: Boolean!
    desc_lc: String
    company_lc: String
    tags: [Tag]!
    coach: User
    ratingId: ID!
}

extend type User @key(fields: "id"){
    id: ID! @external
    rqpost: rqPost
}

type Job{
    id: ID!
    name: String!
    rqposts: [rqPost]!
    isPending: Boolean!
    isAccepted: Boolean!
    isDenied: Boolean!
    isComplete: Boolean!
    dateRequested: DateTime!
    dateAccepted: DateTime!
    dateCompleted: DateTime!
}

type Industry{
    id: ID!
    name: String!
    rqposts: [rqPost]!
}

type Tag{
    id: ID!
    name: String!
    rqposts: [rqPost]!
}
`

module.exports = typeDefs