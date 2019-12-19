
module.exports = {
    resumeQinfo,
    post,
    posts,
    industry,
    industries,
}

function resumeQinfo(){
    return "Welcome to ResumeQ"
}

function post(_parent, args, context){
    return context.prisma.post({ id: args.id })
}

function posts(_parent, args, context){
    return context.prisma.posts({ posts: args.posts })
}

function industry(_parents, args, context){
    return context.prisma.industry({ where: { industry: { name: args.name }}})
}

function industries(_parent, args, context){
    return context.prisma.industries()
}