module.exports = { rqposts };

function rqposts(root, _args, context) {
	return context.prisma.tag({ id: root.id }).rqposts();
}
