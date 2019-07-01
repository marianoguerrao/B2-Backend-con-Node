import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import ExpressPlayground from 'graphql-playground-middleware-express';
import boom from 'express-boom';
import schema from './schema';
import resolvers from './resolvers';
import jwt from 'jsonwebtoken';

const APP_PORT = process.env.APP_PORT || 8080;
const APP_MONGO_URI = process.env.APP_MONGO_URI;
const APP_JWT_SECRET = process.env.APP_JWT_SECRET;
const app = express();

// Using boom http-friendly messages
app.use(boom());

// Added schema definitions and resolvers
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({ req }) => {
    let currentUser;
    const token = req.headers.authorization;
    if (token) {
      currentUser = jwt.verify(token, APP_JWT_SECRET);
    }
    return { ...req, currentUser };
  },
});
// `applyMiddleware`: Allow middleware mounted on the same path
server.applyMiddleware({ app });

// Added middlewares for parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route handler for root path
app.get('/', (req, res) => res.status(200).json({
  statusCode: 200,
  message: 'Welcome to Bedu Travels API'
}));

app.get('/playground', ExpressPlayground({ endpoint: '/graphql' }));

// Route handler for 404
app.use('*', (req, res) => res.boom.notFound());

// Connecting to Mongo DB
mongoose.connect(APP_MONGO_URI, { useNewUrlParser: true }).then(() => {
  app.listen(APP_PORT, () => {
    console.log(`GraphQL API Service: 0.0.0.0:${APP_PORT}/graphql`);
    console.log(`GraphQL Playground: 0.0.0.0:${APP_PORT}/playground`);
    console.log(`Mongo DB Service: ${APP_MONGO_URI}`);
  });
}).catch(err => {
  throw new Error(err)
});
