const { gql } = require('apollo-server')

const typeDefs = gql`

scalar DateTime

extend type Query{
    resumeQinfo: String!
    reviewerListing(id: String!): ReviewerListing!
    reviewerListings: [ReviewerListing]!
    resumeReview(id: String!): ResumeReview!
    resumeReviews: [ResumeReview]!
}

type Mutation{

    createReviewerListing(
        price: Int
        position: String
        industry: String
        description: String
        createdAt: DateTime
        updatedAt: DateTime
        company: String
        isPublished: Boolean
    ): ReviewerListing!

    deleteReviewerListing(
        id: String!
    ): ReviewerListing!

    createResumeReview(
        name: String
        isPending: Boolean
        isAccepted: Boolean
        isDenied: Boolean
        isComplete: Boolean
        dateRequested: DateTime
        dateAccepted: DateTime
        dateCompleted: DateTime
    ): ResumeReview!

    deleteResumeReview(
        id: String!
    ): ResumeReview!

}

type ReviewerListing {
    id: ID!
    price: Int
    position: String
    industry: String
    description: String!
    reviewer: User!
    createdAt: DateTime!
    updatedAt: DateTime!
    company: String
    isPublished: Boolean!
}

type ResumeReview {
    id: ID!
    name: String!
    isPending: Boolean!
    isAccepted: Boolean!
    isDenied: Boolean!
    isComplete: Boolean!
    dateRequested: DateTime!
    dateAccepted: DateTime!
    dateCompleted: DateTime!
}

extend type User @key(fields: "id"){
    id: ID! @external
    reviewerListing: ReviewerListing
    resumeReview: ResumeReview
}

`

module.exports = typeDefs