import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

// Import the routes
import routes from './routes/index.js';

const app = express();
// is my running express application, so instead of press I will use app

const PORT = process.env.PORT || 3001;

// TODO: Serve static files of entire client dist folder 
// Note! Make sure to recheck the pathing for the client/dist after im done.
app.use(express.static('../client/dist'));
// TODO: Implement middleware for parsing JSON and urlencoded form data
// these two things are required to run express and move our data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: Implement middleware to connect the routes
app.use(routes);
// this is the connection between the instance of my express server and into my route logic.
// we are going to send the request through the routes folder
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
//  modular routing in fsf

// start the server.ts to begin to establish the communication. Then follow the crumbs to the APIs