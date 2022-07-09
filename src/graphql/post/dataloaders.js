import DataLoader from 'dataloader';

const makePostDataLoader = (getPosts) => {
    return new DataLoader(async (ids) => {
        const urlQuery = ids.join('&userId=');
        const url = `?userId=${urlQuery}`;
        const posts = await getPosts(url);
        return ids.map((id) => {
            return posts.filter((post) => post.userId === id);
        });
    });
};

export { makePostDataLoader };
