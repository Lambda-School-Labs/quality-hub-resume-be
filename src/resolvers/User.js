function reviewerListing(parent, _args, context) {
  return context.prisma.reviewerListing({ coachID: parent.id })
}

function coach_resume_reviews(parent, _args, context) {
  return context.prisma.resumeReviews({ where: { coach: parent.id } })
}

function seeker_resume_reviews(parent, _args, context) {
  return context.prisma.resumeReviews({ where: { seeker: parent.id } })
}

module.exports = {
  reviewerListing,
  coach_resume_reviews,
  seeker_resume_reviews
}
