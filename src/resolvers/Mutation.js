
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
// MUTATION CREATE RESUME REVIEW "POST" -- this creates the request from a seeker to a coach
async function createResumeReview(parent, args, context) {

    const userID = getUserId(context)

    // check if ResumeReview exists between two users, throw error if so.

    // const queryArgs = {
    //     seeker: userID,
    //     coach: args.coach
    // }
    // checks if a ResumeReview exists that has been requested but not accepted
    const requestExists = await context.prisma.resumeReviews({
        where: {
            AND: [{ isPending: true }, { isAccepted: false }, { seeker: userID }, { coach: args.coach }]
        },
    })

    // checks if a ResumeReview exists that has been accepted but not completed
    const reviewNotCompleted = await context.prisma.resumeReviews({
        where: {
            AND: [{ isAccepted: true }, { isComplete: false }, { seeker: userID }, { coach: args.coach }]
        },

    })

    console.log(`createResumeReview / requestExists`, requestExists)
    console.log(`createResumeReview / reviewNotCompleted`, reviewNotCompleted)

    if (requestExists.length > 0) {
        console.log(`request already exists and will throw error`)
        throw new Error('Request between seeker and coach already exists.')
    }

    if (reviewNotCompleted.length > 0) {
        console.log(`review is in progress and will throw error`)
        throw new Error(`A review between user and coach is already in progress.`)
    }

    return context.prisma.createResumeReview({
        coach: args.coach,
        seeker: userID,
    })
}

// MUTATION UPDATE RESUME REVIEW "PUT"
async function respondResumeReview(parent, args, context) {
    const userID = getUserId(context)
    console.log(`~~respondResumeReview~~`)

    const opArgs = {
        where: {
            AND: [{ id: args.id }, { coach: userID }]
        }
    }

    // if ResumeReview is accepcted, set dateAccepted to current date in format ISO8601
    if (args.isAccepted) {
        // converts current date to ISO8601
        args.dateAccepted = new Date().toISOString();
    }

    // updates to pass into updateResumeReview
    const updates = {
        dateAccepted: args.dateAccepted,
        isPending: args.isPending,
        isAccepted: args.isAccepted,
        isDenied: args.isDenied
    }
    console.log(`args`, args)
    console.log(`respondeResumeReview / updates`, updates)

    return context.prisma.updateResumeReview({
        where: {
            id: args.id
        },
        data: updates
    })
}

async function updateResumeReview(parent, args, context) {
    const userID = getUserId

    // updates objects 
    const updates = {
        isComplete: args.isComplete
    }
    // if updated as completed, add date of completion
    if (args.isComplete) {
        // converts current date to ISO8601
        updates.dateCompleted = new Date().toISOString();
    }

    console.log(`updateResumeReview / updates`, updates)

    return context.prisma.updateResumeReview({
        where: {
            id: args.id
        },
        data: updates
    })
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
    respondResumeReview,
}
