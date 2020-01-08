

function __resolveReference(resumeReview, context) {
	return context.prisma.resumeReview({ id: resumeReview.id })
}

function coach(resumeReview) {
    return { __typename: 'User', id: resumeReview.coachID }
}

function seeker(resumeReview) {
	return { __typename: 'User', id: resumeReview.seeker };
}

module.exports = {
    __resolveReference,
    coach,
    seeker,
}