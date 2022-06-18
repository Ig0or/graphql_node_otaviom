import fetch from 'node-fetch';

import { getPosts } from './post/utils';
import { getUsers } from './user/utils';
import { makeUserDataLoader } from './user/dataloaders';
import { makePostDataLoader } from './post/dataloaders';

const context = () => {
    return {
        postDataLoader: makePostDataLoader(getPosts(fetch)),
        userDataLoader: makeUserDataLoader(getUsers(fetch)),
        getUsers: getUsers(fetch),
        getPosts: getPosts(fetch),
    };
};

export { context };
