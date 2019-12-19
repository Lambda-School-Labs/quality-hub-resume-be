module.exports = { rqposts };

function rqposts(parent, _args, context) {
	return context.prisma.job({ id: parent.id }).rqposts();
}
