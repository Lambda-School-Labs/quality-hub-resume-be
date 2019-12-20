

function __resolveReview(resumeReview, context) {
	return context.prisma.resumeReview({ id: resumeReview.id });
}

module.exports = {
    __resolveReview,
}