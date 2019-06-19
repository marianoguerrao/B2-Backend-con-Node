import 'dotenv/config';
import express from 'express';
import boom from 'express-boom';

const APP_PORT = process.env.APP_PORT || 8080;
const app = express();

// Using boom http-friendly messages
app.use(boom());

// Added middlewares for parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route handler for root path
app.get('/', (req, res) => res.status(200).json({
  statusCode: 200,
  message: 'Welcome to Bedu Travels API'
}));

// Route handler for 404
app.get('*', (req, res) => res.boom.notFound());

app.listen(APP_PORT, () => {
  console.log(`API Service: Now running on port ${APP_PORT}`);
});
