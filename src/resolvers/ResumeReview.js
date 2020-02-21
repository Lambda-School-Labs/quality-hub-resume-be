function __resolveReference(reference, context) {
    const res = context.prisma.resumeReview({ id: reference.id })
}

function coach(resumeReview) {
    return { __typename: 'User', authId: resumeReview.coach }
}

function seeker(resumeReview) {
    return { __typename: 'User', authId: resumeReview.seeker };
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
