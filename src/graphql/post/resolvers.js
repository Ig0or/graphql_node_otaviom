const posts = async (obj, args, context, info) => {
    const getPosts = context.getPosts;

    const response = await getPosts();
    const a = await response.json();
    return response.json();
};

const post = async (obj, args, context, info) => {
    const getPosts = context.getPosts;
    const postId = args.postId;

    const response = await getPosts(postId);
    return response.json();
};

const postResolvers = {
    Query: {
        post,
        posts,
    },
};

export { postResolvers };
