const posts = async (obj, args, context, info) => {
    const apiFilterInput = new URLSearchParams(args.input);
    const getPosts = context.getPosts;

    const response = await getPosts(`?/${apiFilterInput}`);
    return response.json();
};

const post = async (obj, args, context, info) => {
    const getPosts = context.getPosts;
    const postId = args.postId;

    const response = await getPosts(postId);
    const post = await response.json();

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
