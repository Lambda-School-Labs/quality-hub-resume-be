const { getUserId } = require('../utils')
// CHECK SERVER
function resumeQinfo() {
    return "Welcome to ResumeQ"
}

// REVIEWER LISTING by ID
function reviewerListing(_parent, args, context) {
    return context.prisma.reviewerListing({ id: args.id })
}
// REVIEWER LISTINGS (ALL)
function reviewerListings(_parent, args, context) {
    // opArgs holds arguments that can be used to filter queries including what order to return data
    const opArgs = {
        orderBy: args.orderBy,
        where: {
            // query only returns publshed postings
            AND: [{ isPublished: true }]
        }
    }


    // split string and assign lesser value to price_gte and greater value to price_lte
    if (args.price) {
        // provide price as a range in a string '#floor, #ceiling'
        const priceRange = args.price.split(',')
        opArgs.where.AND.push({ price_gte: Number(priceRange[0]) });
        opArgs.where.AND.push({ price_lte: Number(priceRange[1]) });
    }
    if (args.description) {
        opArgs.where.AND.push({ description_contains: args.description })
    }
    return context.prisma.reviewerListings(opArgs)
}

// RESUME REVIEW by ID
function resumeReview(_parent, args, context) {
    return context.prisma.resumeReview({ id: args.id })
}

// RESUME REVIEWS (ALL)
function resumeReviews(_parent, args, context) {
    return context.prisma.resumeReviews()
}

// function resumeReviewByUsers(_parent, args, context) {
//     console.log(`resumeReviewByUsers/ args`, args)
//     return context.prisma.resumeReview(args)
// }

// Query to return the ResumeReviews that are -requested- (i.e. where isPending = true and isAccepted = false)
function requestedResumeReviews(_parent, args, context) {
    const userID = getUserId(context)
    const opArgs = {
        where: {
            AND: [{ coach: userID }, { isPending: true }, { isAccepted: false }]
        }
    }
    return context.prisma.resumeReviews(opArgs)
}

// Query to return the ResumeReviews that are accepted, but not completed -- (i.e. where isAccepted = true, and isComplete = false) This returns a users Work In Progress
function acceptedResumeReviews(_parent, args, context) {
    const userID = getUserId(context)
    const opArgs = {
        where: {
            AND: [{ coach: userID }, { isAccepted: true }, { isComplete: false }]
        }
    }
    return context.prisma.resumeReviews(opArgs)
}

// Query to return the ResumeReviews that are completed (i.e. where isCompleted=true)
function completedResumeReviews(_parent, args, context) {
    const userID = getUserId(context)
    const opArgs = {
        where: {
            AND: [{ coach: userID }, { isAccepted: true }, { isComplete: true }]
        }
    }
    return context.prisma.resumeReviews(opArgs)
}

// Query to return the ResumeReviews that are declined (i.e. where isPending=false and isAccepted = false)
function declinedResumeReviews(_parent, args, context) {
    const userID = getUserId(context)
    const opArgs = {
        where: {
            AND: [{ coach: userID }, { isAccepted: false }, { isPending: false }]
        }
    }
    return context.prisma.resumeReviews(opArgs)
}

function listingByReviewer(_parent, args, context) {
    // retrieves userID from token. userID is stored in opArgs and passed into prisma.reviewerListing

    const userID = getUserId(context)
    console.log(`userID`, userID)
    return context.prisma.reviewerListing({
        coachID: userID
    })
}

// Accepted Reviews By Seeker (FE SeekerPanel)
function acceptedReviewsBySeeker(_parent, args, context) {
    const userID = getUserId(context)
    const opArgs = {
        where: {
            AND: [{ seeker: userID }, { isAccepted: true }]
        }
    }
    return context.prisma.resumeReviews(opArgs)
}

// Denied Reviews By Seeker (FE SeekerPanel)
function deniedReviewsBySeeker(_parent, args, context) {
    const userID = getUserId(context)
    const opArgs = {
        where: {
            AND: [{ seeker: userID }, { isDenied: true }]
        }
    }
    return context.prisma.resumeReviews(opArgs)
}





module.exports = {
    resumeQinfo,
    reviewerListing,
    reviewerListings,
    resumeReview,
    resumeReviews,
    listingByReviewer,
    requestedResumeReviews,
    acceptedResumeReviews,
    completedResumeReviews,
    declinedResumeReviews,
    acceptedReviewsBySeeker,
    deniedReviewsBySeeker,
}
