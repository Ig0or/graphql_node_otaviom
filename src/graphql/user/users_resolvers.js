const user = async (obj, args, context, info) => {
    const getUsers = context.getUsers;
    const userId = args.userId;

    const response = await getUsers(userId);
    return response.json();
};

const users = async (obj, args, context, info) => {
    const apiFilterInput = new URLSearchParams(args.input);
    const getUsers = context.getUsers;

    const response = await getUsers(`?/${apiFilterInput}`);
    return response.json();
};

const posts = async (obj, args, context, info) => {
    const postDataLoader = context.postDataLoader;
    const post = postDataLoader.load(obj.id);
    return post;
};

const userResolvers = {
    Query: {
        user,
        users,
    },
    User: {
        posts: posts,
    },
};

export { userResolvers };
