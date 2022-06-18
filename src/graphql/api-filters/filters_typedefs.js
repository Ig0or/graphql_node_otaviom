import { gql } from 'apollo-server';

const apiFiltersTypeDefs = gql`
    enum ApiFilterOrder {
        ASC
        DESC
    }

    input ApiFiltersInput {
        _sort: String
        _order: ApiFilterOrder
        _start: Int
        _limit: Int
    }
`;

export { apiFiltersTypeDefs };
