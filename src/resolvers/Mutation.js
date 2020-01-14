
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
async function respondResumeReview(parent, args, context) {
    const userID = getUserId(context)

    const opArgs = {
        where: {
            AND: [{ id: args.id }, { coach: userID }]
        }
    }

    // updates to pass into updateResumeReview
    const updates = {
        ...args,
    }


    // if ResumeReview is accepcted, set dateAccepted to current date in format ISO8601
    if (args.isAccepted) {
        // converts current date to ISO8601
        updates.dateAccepted = new Date().toISOString();
    }



    return context.prisma.updateResumeReview(opArgs, updates)
}

async function updateResumeReview(parent, args, context) {
    const userID = getUserId

    const opArgs = {
        where: {
            AND: [{ id: args.id }, { coach: userID }]
        }
    }

    // updates objects 
    const updates = {
        ...args,
    }

    // retrieve original ResumeReview entry for checking isCompleted
    const originalEntry = await context.prisma.resumeReviews({ where: { id: args.id } })

    // checks if originalEntry is not accepted and new value is accepted. if so, dateCompleted is set to current date
    if (!originalEntry.isAccepted && args.isAccepted) {
        // converts current date to ISO8601
        updates.dateCompleted = new Date().toISOString();
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
    respondResumeReview,
}
