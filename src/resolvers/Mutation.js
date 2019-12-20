

async function createListing(parent, args, context){
    return context.prisma.createListing({
        price: args.price,
        position: args.position,
        industry: args.industry,
        description: args.description,
        reviewerID: args.reviewerID,
        createdAt: args.createdAt,
        updatedAt: args.updatedAt,
        company: args.company,
        isPublished: args.isPublished,
    })
}

async function createReview(parent, args, context){
    return context.prisma.createReview({
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

module.exports = {
    createListing,
    createReview,
}