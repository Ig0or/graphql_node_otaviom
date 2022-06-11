import { gql } from 'apollo-server';

const apiFiltersTypeDefs = gql`
    input ApiFiltersInput {
        _sort: String
        _order: String
        _start: Int
        _limit: Int
    }
`;

export { apiFiltersTypeDefs };
