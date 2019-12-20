

async function createResumeListing(parent, args, context){
    return context.prisma.createResumeListing({
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

async function createResumeReview(parent, args, context){
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

module.exports = {
    createResumeListing,
    createResumeReview,
}