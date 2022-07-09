const users = async (obj, args, context, info) => {
    const input = args.input;
    const users = await context.dataSources.userApi.getUsers(input);

    return users;
};

const user = async (obj, args, context, info) => {
    const userId = args.userId;
    const user = await context.dataSources.userApi.getUser(userId);

    return user;
};
const posts = async (obj, args, context, info) => {
    const postId = obj.id;
    const postApi = context.dataSources.postApi;
    const post = postApi.batchloadByUserId(postId);

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
