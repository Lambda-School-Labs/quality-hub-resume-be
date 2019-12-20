
function resumeQinfo(){
    return "Welcome to ResumeQ"
}

function reviewerListing(_parent, args, context){
    return context.prisma.reviewerListing({ id: args.id })
}



function resumeReview(_parent, args, context){
    return context.prisma.resumeReview({ id: args.id })
}


module.exports = {
    resumeQinfo,
    reviewerListing,
    resumeReview,
}
