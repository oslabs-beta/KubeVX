const express = require('express');
const router = require('./routes/api');
const prometheus = require('prom-client');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const path = require('path');

require('dotenv').config()

const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://localhost:7070',
  credentials: true
}));

app.use(session({
  secret: 'hardcoded_secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: 'mongodb+srv://kubevx:letmein123@cluster0.zvkmoiz.mongodb.net/?retryWrites=true&w=majority'
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}));

// HANDLE PARSING REQUEST BODY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define route handler
app.use('/', router);

app.use(express.static(path.join(__dirname, '../src/public')));
app.use(express.static(path.join(__dirname, '../dist/')));

// Enable collection of default metrics
prometheus.collectDefaultMetrics();

app.use('/metrics', cors());

// Define a custom metric
const httpRequestCount = new prometheus.Counter({
  name: 'webapp_http_requests_total',
  help: 'Total number of HTTP requests',
});

app.get('/', (req, res) => {
  // Increment the custom metric on each request
  httpRequestCount.inc();
  res.send('Hello World!');
});

// CATCH-ALL ROUTE HANDLER
app.use('*', (req, res) => res.sendStatus(404));

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);

  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});