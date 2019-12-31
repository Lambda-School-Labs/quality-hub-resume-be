
// USE THIS TO CONNECT WITH USER AFTER INITIAL SET UP
// const { getUserId } = require('../utils')

async function createReviewerListing(parent, args, context){
    return context.prisma.createReviewerListing({
        price: args.price,
        position: args.position,
        industry: args.industry,
        description: args.description,
        reviewer: args.reviewer,
        createdAt: args.createdAt,
        updatedAt: args.updatedAt,
        company: args.company,
        isPublished: args.isPublished,
    })
}

function deleteReviewerListing(parent, args, context){
    return context.prisma.deleteReviewerListing({ id: args.id })
}

function createResumeReview(parent, args, context){
    return context.prisma.createResumeReview({
        name: args.name,
        isPending: args.isPending,
        isAccepted: args.isAccepted,
        isDenied: args.isDenied,
        isComplete: args.isComplete,
        dateRequested: args.dateRequested,
        dateAccepted: args.dateAccepted,
        dateCompleted: args.dateCompleted,
    })
}

function deleteResumeReview(parent, args, context){
    return context.prisma.deleteResumeReview({ id: args.id })
}

module.exports = {
    createReviewerListing,
    deleteReviewerListing,
    createResumeReview,
    deleteResumeReview,
  }

