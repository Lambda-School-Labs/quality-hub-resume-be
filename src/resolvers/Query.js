
// CHECK SERVER
function resumeQinfo(){
    return "Welcome to ResumeQ"
}

// REVIEWER LISTING by ID
function reviewerListing(_parent, args, context){
    return context.prisma.reviewerListing({ id: args.id })
}
// REVIEWER LISTINGS (ALL)
function reviewerListings(_parent, args, context){
    return context.prisma.reviewerListings()
}

// RESUME REVIEW by ID
function resumeReview(_parent, args, context){
    return context.prisma.resumeReview({ id: args.id })
}

// RESUME REVIEWS (ALL)
function resumeReviews(_parent, args, context){
    return context.prisma.resumeReviews()
}


module.exports = {
    resumeQinfo,
    reviewerListing,
    reviewerListings,
    resumeReview,
    resumeReviews,
}
