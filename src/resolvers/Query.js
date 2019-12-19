
module.exports = {
    resumeQinfo,
    rqpost,
    rqposts,
    industry,
    industries,
}

function resumeQinfo(){
    return "Welcome to ResumeQ"
}

function rqpost(_parent, args, context){
    return context.prisma.rqpost({ id: args.id })
}

function rqposts(_parent, args, context){
    return context.prisma.rqposts({ posts: args.posts })
}

function industry(_parents, args, context){
    return context.prisma.industry({ where: { industry: { name: args.name }}})
}

function industries(_parent, args, context){
    return context.prisma.industries()
}