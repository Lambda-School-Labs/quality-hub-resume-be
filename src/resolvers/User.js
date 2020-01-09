function reviewerListing(parent, _args, context) {
  return context.prisma.reviewerListing({ coachID: parent.id })
}

// function __resolveReference(reviewerListing, context) {
//   return context.prisma.reviewerListing({ id: reviewerListing.id })
// }

module.exports = {
  reviewerListing,
  // __resolveReference
}
