
module.exports = { industry, coach, tags };

function industry(parent, _args, context) {
	return context.prisma.rqpost({ id: parent.id }).industry();
}

function coach(rqpost) {
	return { __typename: 'User', id: rqpost.coachID };
}

function tags(parent, _args, context) {
	return context.prisma.rqpost({ id: parent.id }).tags();
}

