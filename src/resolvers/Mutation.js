
// USE THIS TO CONNECT WITH USER AFTER INITIAL SET UP
const { getUserId } = require('../utils')

// MUTATION CREATE REVIEWER LISTING "POST"
async function createReviewerListing(parent, args, context) {

    const coachID = getUserId(context)

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
        coachID,
    })
}

// MUTATION UPDATE REVIEWER LISTING "PUT"
async function updateReviewerListing(perent, args, context) {

    const coachID = getUserId(context)

    return context.prisma.updateReviewerListing({
        where: {
            id: args.id
        },
        data: {
            price: args.price,
            position: args.position,
            industry: args.industry,
            description: args.description,
            reviewer: args.reviewer,
            createdAt: args.createdAt,
            updatedAt: args.updatedAt,
            company: args.company,
            isPublished: args.isPublished,
            coachID,
        }
    })
}

// MUTATION DELETE REVIEWER LISTING by ID
function deleteReviewerListing(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.deleteReviewerListing({
        coachID: id,
    })
}



///
// MUTATION CREATE RESUME REVIEW "POST"
function createResumeReview(parent, args, context) {

    const userID = getUserId(context)

    return context.prisma.createResumeReview({
        coach: args.coach,
        seeker: userID,
    })
}

// MUTATION UPDATE RESUME REVIEW "PUT", only the assigned coach can make the mutation
async function acceptResumeReview(parent, args, context) {
    const userID = getUserId(context)

    const opArgs = {
        where: {
            AND: [{ id: args.id }, { coach: userID }]
        }
    }

    const updates = {
        ...args
    }

    return context.prisma.updateResumeReview(opArgs, updates)
}

async function acceptResumeReview(parent, args, context) {
    const userID = getUserId(context)

    const opArgs = {
        where: {
            AND: [{ id: args.id }, { coach: userID }]
        }
    }

    const updates = {
        ...args
    }

    return context.prisma.updateResumeReview(opArgs, updates)
}

// MUTATION DELETE RESUME REVIEW by ID
function deleteResumeReview(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.deleteResumeReview({
        seeker: id,
    })
}

module.exports = {

    createReviewerListing,
    updateReviewerListing,
    deleteReviewerListing,
    createResumeReview,
    updateResumeReview,
    deleteResumeReview,

}
