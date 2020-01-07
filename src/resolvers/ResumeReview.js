

function __resolveReference(resumeReview, context) {
	return context.prisma.resumeReview({ id: resumeReview.id })
}

module.exports = {
    __resolveReference,
}