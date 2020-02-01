function reviewerListing(parent, _args, context) {
  return context.prisma.reviewerListing({ coachID: parent.id })
}

function coach_resume_reviews(parent, _args, context) {
  return context.prisma.resumeReviews({ where: { coach: parent.id } })
}

function seeker_resume_reviews(parent, _args, context) {
  return context.prisma.resumeReviews({ where: { seeker: parent.id } })
}

function __resolveReference(parent, args, { prisma }) {
  const res = prisma.user({ id: parent.id })
  return res
}

module.exports = {
  reviewerListing,
  coach_resume_reviews,
  seeker_resume_reviews,
  __resolveReference
}
