// ES2015 module imports
// import express from 'express';

// common JS imports
const express = require('express');
require('./services/passport'); // importing file
const app = express();
require('./routes/authRoues')(app);



// dynamic port binding - Heroku will inject PORT into env variable.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
