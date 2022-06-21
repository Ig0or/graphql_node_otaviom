const posts = async (obj, args, context, info) => {
    const input = args.input;
    const posts = await context.dataSources.postApi.getPosts(input);

    return posts;
};

const post = async (obj, args, context, info) => {
    const postId = args.postId;
    const post = await context.dataSources.postApi.getPost(postId);

    return post;
};

const user = async (obj, args, context, info) => {
    const userDataLoader = context.userDataLoader;
    const user = userDataLoader.load(obj.userId);
    return user;
};

const postResolvers = {
    Query: {
        post,
        posts,
    },
    Post: {
        user: user,
    },
};

export { postResolvers };
