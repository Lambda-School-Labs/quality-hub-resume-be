
function coach(reviewerListing) {
    return { __typename: 'User', id: reviewerListing.coachID }
}

function __resolveReference(reviewerListing, context) {
    return context.prisma.reviewerListing({ id: reviewerListing.id });
}

function reviews(reviewerListing) {
    console.log(`Attempting to resolve Reviews on a ReviewerListing`)
    console.log(`reviewerListing`, reviewerListing)
    return { __typename: 'Review', coach: reviewerListing.coachID }
}


module.exports = {
    __resolveReference,
    coach,
    reviews
}
