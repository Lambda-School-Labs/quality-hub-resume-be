function reviewerListing(parent, _args, context) {
  return context.prisma.reviewerListing({ coachID: parent.authId });
}

function resume_reviews_as_coach(parent, _args, context) {
  return context.prisma.resumeReviews({ where: { coach: parent.authId } });
}

function resume_reviews_as_seeker(parent, _args, context) {
  return context.prisma.resumeReviews({ where: { seeker: parent.authId } });
}

module.exports = {
  reviewerListing,
  resume_reviews_as_coach,
  resume_reviews_as_seeker
};
