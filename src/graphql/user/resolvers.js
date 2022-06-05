const user = async (obj, args, context, info) => {
    const getUsers = context.getUsers;
    const userId = args.userId;
    const user = await getUsers(userId);
    return user.json();
};

async function users(obj, args, context, info) {
    const getUsers = context.getUsers;
    const users = await getUsers();
    return users.json();
}

const userResolvers = {
    Query: {
        user,
        users,
    },
};

export { userResolvers };
