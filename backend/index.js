if (process.env.NODE_ENV == 'development') {
    require('dotenv').config();
}
import express from 'express';
import graphqlHTTP from "express-graphql";
import {connectMongoDB} from './database'
import schema from "./graphql/schema";

const app = express();
connectMongoDB();

const port = process.env.PORT || 5000;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    context: {
        messageId: 'test'
    }
}));

app.listen(port, () => console.log('Server on port', port));