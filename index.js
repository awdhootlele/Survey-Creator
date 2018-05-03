// ES2015 module imports
// import express from 'express';

// common JS imports
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

// dynamic port binding - Heroku will inject PORT into env variable.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
