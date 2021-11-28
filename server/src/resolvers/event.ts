const Event = {
  owner: (parent, args, context) => context.prisma.event.findUnique({ where: { id: parent.id } }).owner(),
  medias: (parent, args, context) => context.prisma.event.findUnique({ where: { id: parent.id } }).medias(),
};

export { Event as default };
