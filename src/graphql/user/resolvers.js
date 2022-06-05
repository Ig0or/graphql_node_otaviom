const user = async (obj, args, context, info) => {
    const fetch = context.fetch;
    const userId = args.userId;
    const url = `http://localhost:3000/users/${userId}`;
    const user = await fetch(url);
    return user.json();
};

async function users(obj, args, context, info) {
    const fetch = context.fetch;
    const users = await fetch('http://localhost:3000/users');
    return users.json();
}

const userResolvers = {
    Query: {
        user,
        users,
    },
};

export { userResolvers };
