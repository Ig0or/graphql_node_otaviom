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

    if (Math.random() > 0.5) {
        return {
            statusCode: 500,
            message: 'Timeout!',
            timeout: 123,
        };
    }

    if (typeof post.id == 'undefined') {
        return {
            statusCode: 404,
            message: 'Post not found!',
            postId: postId,
        };
    }

    return post;
};

const postResolvers = {
    Query: {
        post,
        posts,
    },
    PostResult: {
        __resolveType: (obj) => {
            if (typeof obj.postId != 'undefined') {
                return 'PostNotFoundError';
            }
            if (typeof obj.timeout != 'undefined') {
                return 'PostTimeoutError';
            }
            if (typeof obj.id != 'undefined') {
                return 'Post';
            }
        },
    },
    PostError: {
        __resolveType: (obj) => {
            if (typeof obj.postId != 'undefined') {
                return 'PostNotFoundError';
            }
            if (typeof obj.timeout != 'undefined') {
                return 'PostTimeoutError';
            }
        },
    },
};

export { postResolvers };
