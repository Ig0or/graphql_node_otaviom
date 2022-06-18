const getPosts =
    (fetch) =>
    (path = '') => {
        const API_BASE_URL = process.env.API_BASE_URL;
        const url_posts = `${API_BASE_URL}/posts/`;
        return fetch(url_posts + path);
    };

export { getPosts };
