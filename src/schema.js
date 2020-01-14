const { gql } = require('apollo-server')

const typeDefs = gql`

scalar DateTime

extend type Query{
    resumeQinfo: String!
    reviewerListing(id: String!): ReviewerListing!
    listingByReviewer: ReviewerListing
    reviewerListings(
        description: String
        price: String
        orderBy: String
    ): [ReviewerListing]!
    resumeReview(id: String!): ResumeReview!
    resumeReviews: [ResumeReview]!
    requestedResumeReviews: [ResumeReview]!
    acceptedResumeReviews: [ResumeReview]!
    completedResumeReviews: [ResumeReview]!
    declinedResumeReviews: [ResumeReview]!
    resumeReviewsBySeeker: [ResumeReview]!


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
        coach: String!
    ): ResumeReview!
    
    respondResumeReview(
        id:String!
        isPending: Boolean!
        isAccepted: Boolean!
        isDenied: Boolean!
    ): ResumeReview

    updateResumeReview(
        id: String!
        isComplete: Boolean
    ): ResumeReview

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
    isPending: Boolean!
    isAccepted: Boolean!
    isDenied: Boolean!
    isComplete: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
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
