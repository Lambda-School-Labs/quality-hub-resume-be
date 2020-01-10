function reviewerListing(parent, _args, context) {
  return context.prisma.reviewerListing({ coachID: parent.id })
}



module.exports = {
  reviewerListing,
  // __resolveReference
}
