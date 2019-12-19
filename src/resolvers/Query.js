
module.exports = {
    resumeQinfo,
    rqpost,
    rqposts,
    rqindustry,
    rqindustries,
}

function resumeQinfo(){
    return "Welcome to ResumeQ"
}

function rqpost(_parent, args, context){
    return context.prisma.rqpost({ id: args.id })
}

function rqposts(_parent, args, context){
    return context.prisma.rqposts({ rqposts: args.rqposts })
}

function rqindustry(_parents, args, context){
    return context.prisma.rqindustry({ where: { rqindustry: { name: args.name }}})
}

function rqindustries(_parent, args, context){
    return context.prisma.rqindustries()
}