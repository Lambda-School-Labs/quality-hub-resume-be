module.exports = { rqposts }

function rqposts(parent, _args, context) {
	return context.prisma.industry({ id: parent.id }).rqposts()
}
