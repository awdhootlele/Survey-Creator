// ES2015 module imports
// import express from 'express';

// common JS imports
const cookieSession = require('cookie-session'); // this lib manages cookies
const passport = require('passport'); // we are going to manage cookies using passportJS
const keys = require('./config/keys');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/User'); // import file for execution
require('./models/Survey');
require('./services/passport'); // importing passport related code
mongoose.connect(keys.MONGO_URI);
const app = express();

app.use(bodyParser.json()); // use body parser middleware

// set tup middlewares
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // lasts for 30 days
    keys: [keys.COOKIE_KEY] // used to encrypt the cookie
  })
);

app.use(passport.initialize()); // initialize passport authentication middleware
app.use(passport.session()); // used to serialize / deserialize the sessionId (Cookie)

// include routes
require('./routes/authRoutes')(app);
// include billing routes
require('./routes/billingRoutes')(app);

// config for prod environment (to serve static prod assets)
if (process.env.NODE_ENV === 'production') {
  // order is important - FIRST serve static assets THEN handle unmatched route case
  // serve satic asset (js/css)
  app.use(express.static('client/build'));
  // serve index.html (if non  recognized route is encountered)
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// dynamic port binding - Heroku will inject PORT into env variable.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
