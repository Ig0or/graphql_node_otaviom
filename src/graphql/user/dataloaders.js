import DataLoader from 'dataloader';

const makeUserDataLoader = (getUsers) => {
    return new DataLoader(async (ids) => {
        const urlQuery = ids.join('&id=');
        const url = `?id=${urlQuery}`;
        const response = await getUsers(url);
        const users = await response.json();
        return ids.map((id) => users.find((user) => user.id === id));
    });
};

export { makeUserDataLoader };
