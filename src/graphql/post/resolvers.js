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
    return response.json();
};

const postResolvers = {
    Query: {
        post,
        posts,
    },
};

export { postResolvers };
