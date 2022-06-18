const getUsers =
    (fetch) =>
    (path = '') => {
        const API_BASE_URL = process.env.API_BASE_URL;
        const url_users = `${API_BASE_URL}/users/`;
        return fetch(url_users + path);
    };

export { getUsers };
