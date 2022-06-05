import fetch from 'node-fetch';

const context = () => {
    return {
        getUsers: (path = '') => {
            const baseUrl = 'http://localhost:3000/users/';
            return fetch(baseUrl + path);
        },
    };
};

export { context };
