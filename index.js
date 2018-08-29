// ES2015 module imports
// import express from 'express';

// common JS imports
const cookieSession = require('cookie-session'); // this lib manages cookies 
const passport = require('passport'); // we are going to manage cookies using passportJS
const keys = require('./config/keys');
const express = require('express');
const mongoose = require('mongoose');
require('./models/user'); // import file for execution
require('./services/passport'); // importing passport related code
mongoose.connect(keys.MONGO_URI);
const app = express();
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // lasts for 30 days
        keys: [keys.COOKIE_KEY] // used to encrypt the cookie
    })
);

app.use(passport.initialize()); // ???
app.use(passport.session()); // ???
require('./routes/authRoutes')(app);



// dynamic port binding - Heroku will inject PORT into env variable.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
