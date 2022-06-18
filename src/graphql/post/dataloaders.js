import DataLoader from 'dataloader';

const makePostDataLoader = (getPosts) => {
    return new DataLoader(async (ids) => {
        const urlQuery = ids.join('&userId=');
        const url = `?userId=${urlQuery}`;
        const response = await getPosts(url);
        const posts = await response.json();
        return ids.map((id) => {
            return posts.filter((post) => post.userId === id);
        });
    });
};

export { makePostDataLoader };
