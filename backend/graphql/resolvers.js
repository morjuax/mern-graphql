import GotController from '../controllers/GotController'
import {GraphQLScalarType} from 'graphql';
import {Kind} from 'graphql/language';

export const resolvers = {
    Query: {
        hello: () => 'Hello world',
        async getCharacter(_, {_id}) {
            let response = await GotController.getCharacter(_id);
            return response.data;
        },
        async getCharacters() {
            let response = await GotController.getCharacters();
            return response.data;
        }
    },
    Mutation: {
        async saveCharacters() {
            let response = await GotController.save();
            if (response.status) {
                return 'Data saved'
            }
            return 'Data error';
        }
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return value.toLocaleDateString('en-US'); // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return parseInt(ast.value, 10); // ast value is always in string format
            }
            return null;
        },
    }),
};