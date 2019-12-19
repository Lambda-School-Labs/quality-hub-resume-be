module.exports = { rqposts }

function rqposts(parent, _args, context) {
	return context.prisma.rqindustry({ id: parent.id }).rqposts()
}
