
// CHECK SERVER
function resumeQinfo(){
    return "Welcome to ResumeQ"
}

// RESUME LISTINGS
function reviewerListing(_parent, args, context){
    return context.prisma.reviewerListing({ id: args.id })
}

function reviewerListings(_parent, args, context){
    return context.prisma.reviewerListings()
}


// RESUME REVIEWS
function resumeReview(_parent, args, context){
    return context.prisma.resumeReview({ id: args.id })
}

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
