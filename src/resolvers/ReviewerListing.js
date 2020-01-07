

function __resolveListing(reviewerListing, context) {
	return context.prisma.reviewerListing({ id: reviewerListing.id })
}

module.exports = {
    __resolveListing,
}