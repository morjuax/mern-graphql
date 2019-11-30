import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from "./resolvers";

const typeDefs = `
    scalar Date
    type Query {
        hello: String
        getCharacter(_id: ID!) : Character!
        getCharacters: [Character!]
    }
    type Character {
        _id: ID
        titles: [String]
        spouse: [String]
        children: [String]
        allegiance: [String]
        books: [String]
        plod: Int
        longevity: [String]
        plodB: Int
        plodC: Int
        longevityB: [String]
        longevityC: [String]
        name: String
        slug: String
        gender: String
        house: String
        alive: Boolean
        createdAt: Date
        updatedAt: Date
        pagerank: String
        id: String
    }
    type Mutation {
        saveCharacters: String
    }
`;

export default makeExecutableSchema({
    typeDefs, resolvers
});
