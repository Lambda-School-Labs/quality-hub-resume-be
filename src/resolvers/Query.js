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
    // opArgs holds arguments that can be used to filter queries
    const opArgs = {
        where: {
            // query only returns publshed postings
            AND: [{ isPublished: true }]
        }
    }
    // split string and assign lesser value to price_gte and greater value to price_lte
    if (args.price) {
        // provide price as a range in a string '#floor, #ceiling'
        const priceRange = args.prices.split(',')
        opArgs.where.AND.push({ price_gte: Number(priceRange[0]) });
        opArgs.where.AND.push({ price_lte: Number(priceRange[1]) });
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

function listingByReviewer(_parent, args, context) {
    // retrieves userID from token. userID is stored in opArgs and passed into prisma.reviewerListing

    const userID = getUserId(context)
    console.log(`userID`, userID)
    return context.prisma.reviewerListing({
        coachID: userID
    })
}




module.exports = {
    resumeQinfo,
    reviewerListing,
    reviewerListings,
    resumeReview,
    resumeReviews,
    listingByReviewer
}
