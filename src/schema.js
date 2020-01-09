const { gql } = require('apollo-server')

const typeDefs = gql`

scalar DateTime

extend type Query{
    resumeQinfo: String!
    reviewerListing(id: String!): ReviewerListing!
    listingByReviewer: ReviewerListing
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

    updateReviewerListing(
        id: String!
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
        createdAt: DateTime
        updatedAt: DateTime
        dateRequested: DateTime
        dateAccepted: DateTime
        dateCompleted: DateTime
        coach: String!
    ): ResumeReview!
    
    updateResumeReview(
        id: String!
        name: String
        isPending: Boolean
        isAccepted: Boolean
        isDenied: Boolean
        isComplete: Boolean
        createdAt: DateTime
        updatedAt: DateTime
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
    coach: User!
}

type ResumeReview {
    id: ID!
    name: String!
    isPending: Boolean!
    isAccepted: Boolean!
    isDenied: Boolean!
    isComplete: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    dateRequested: DateTime
    dateAccepted: DateTime
    dateCompleted: DateTime
    coach: User!
	seeker: User!
}

extend type User @key(fields: "id"){
    id: ID! @external
    reviewerListing: ReviewerListing
    resumeReview: ResumeReview
    coach_resume_reviews: [ResumeReview]
	seeker_resume_reviews: [ResumeReview]
}

`

module.exports = typeDefs
