import fetch from 'node-fetch';

const baseUrl = 'http://localhost:3000';

const context = () => {
    return {
        getUsers: (path = '') => {
            const url_users = `${baseUrl}/users/`;
            return fetch(url_users + path);
        },
        getPosts: (path = '') => {
            const url_posts = `${baseUrl}/posts/`;
            return fetch(url_posts + path);
        },
    };
};

export { context };
