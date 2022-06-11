const user = async (obj, args, context, info) => {
    const getUsers = context.getUsers;
    const userId = args.userId;

    const response = await getUsers(userId);
    return response.json();
};

async function users(obj, args, context, info) {
    const apiFilterInput = new URLSearchParams(args.input);
    const getUsers = context.getUsers;

    const response = await getUsers(`?/${apiFilterInput}`);
    return response.json();
}

const userResolvers = {
    Query: {
        user,
        users,
    },
};

export { userResolvers };
