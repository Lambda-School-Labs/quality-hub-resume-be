function usersReviewerListing(reviewerListing) {
  return { __typename: 'User', id: reviewerListing.coachID }
}

function __resolveReference(reviewerListing, context) {
  return context.prisma.reviewerListing({ id: reviewerListing.id })
}

module.exports = {
  usersReviewerListing,
  __resolveReference
}
