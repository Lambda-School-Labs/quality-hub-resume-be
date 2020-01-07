

function __resolveReference(reviewerListing, context) {
    return context.prisma.reviewerListing({ id: reviewerListing.id })
}

function coach(reviewerListing) {
    return { __typename: 'User', id: reviewerListing.coachID }
}

module.exports = {
    __resolveReference,
    coach,
}
