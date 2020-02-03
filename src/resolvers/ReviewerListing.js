
function coach(reviewerListing) {
    console.log(`reviewerListing coach`)
    return { __typename: 'User', id: reviewerListing.coachID }
}

function __resolveReference(reviewerListing, context) {
    console.log(`ReviewerListing __resolveReference // reviewerListing`, reviewerListing)
    return context.prisma.reviewerListing({ id: reviewerListing.id });
}




module.exports = {
    __resolveReference,
    coach,

}
