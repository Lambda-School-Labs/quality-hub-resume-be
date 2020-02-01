

function __resolveReference(resumeReview, context) {
    return context.prisma.resumeReview({ id: resumeReview.id })
}

function coach(resumeReview) {
    return { __typename: 'User', id: resumeReview.coach }
}

function seeker(resumeReview) {
    return { __typename: 'User', id: resumeReview.seeker };
}

// provides information to __resolveReference in Core Review resolver
function review(parent) {
    return { __typename: "Review", job: parent.id }
}

module.exports = {
    __resolveReference,
    coach,
    seeker,
    review,
}
