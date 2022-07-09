import { RESTDataSource } from 'apollo-datasource-rest';
import { makeUserDataLoader } from './dataloaders';

class UsersApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `${process.env.API_BASE_URL}/users/`;
        this.dataLoader = makeUserDataLoader(this.getUsers.bind(this));
    }

    async getUsers(urlParams = {}) {
        return this.get('', urlParams, {
            cacheOptions: {
                ttl: 60,
            },
        });
    }

    async getUser(id) {
        return this.get(id, undefined, {
            cacheOptions: {
                ttl: 60,
            },
        });
    }

    batchloadByPostId(id) {
        return this.dataLoader.load(id);
    }
}

export { UsersApi };
