import 'dotenv/config';
import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import boom from 'express-boom';
import schema from './schema';
import resolvers from './resolvers';

const APP_PORT = process.env.APP_PORT || 8080;
const app = express();

// Using boom http-friendly messages
app.use(boom());

// Added schema definitions and resolvers
const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

// Added middlewares for parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route handler for root path
app.get('/', (req, res) => res.status(200).json({
  statusCode: 200,
  message: 'Welcome to Bedu Travels API'
}));

// Route handler for GraphQL Service
app.use('/graphql', graphqlExpress(req => ({
  schema: executableSchema,
  context: {},
})));

// Route handler for GraphiQL
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

// Route handler for 404
app.use('*', (req, res) => res.boom.notFound());

app.listen(APP_PORT, () => {
  console.log(`GraphQL API Service: 0.0.0.0:${APP_PORT}/graphql`);
  console.log(`GraphiQL: 0.0.0.0:${APP_PORT}/graphiql`);
});
