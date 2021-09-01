require('dotenv').config();
const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();
app.use(morgan('tiny'));

// Replace with your mongoLab URI
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PWD = process.env.MONGO_PWD;
const MONGO_DB = process.env.MONGO_DB || 'lyricaldb';
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PWD}@cluster0.yrzqg.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('MongoDB connection success');
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(`MongoDB connection error: ${error.message}`);
    // Exit process with failure
    process.exit(1);
  });

app.use(bodyParser.json());
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

module.exports = app;
