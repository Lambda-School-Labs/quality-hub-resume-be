

function __resolveReference(resumeReview, context) {
	return context.prisma.resumeReview({ id: resumeReview.id })
}

function coach(resumeReview) {
    return { __typename: 'User', id: resumeReview.coach }
}

function seeker(resumeReview) {
	return { __typename: 'User', id: resumeReview.seeker };
}

module.exports = {
    __resolveReference,
    coach,
    seeker,
}