import express from 'express';
import graphqlHTTP from "express-graphql";
import {connectMongoDB} from './database'

const app = express();
connectMongoDB();

const port = process.env.PORT || 3000;

app.use('/graphql', graphqlHTTP({
    schema: {},
    graphiql: true,
    context: {
        messageId: 'test'
    }
}));

app.listen(port, () => console.log('Server on port', port));