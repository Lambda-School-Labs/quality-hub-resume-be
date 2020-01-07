
function coach(reviewerListing) {
    return { __typename: 'User', id: reviewerListing.coachID }
}

<<<<<<< HEAD
function __resolveListing(reviewerListing, context) {
	return context.prisma.reviewerListing({ id: reviewerListing.id })
=======
function __resolveReference(reviewerListing, context) {
    return context.prisma.reviewerListing({ id: reviewerListing.id });
>>>>>>> b0a99391ca000ca6da038c7d89c615a57ff9dbeb
}


module.exports = {
    __resolveReference,
    coach
}
