const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');

// take in newly created user and generate some king of token from it to represent actual user (used as an identifier)
passport.serializeUser((user, done) => {
  done(null, user.id); // user.id points to user._id (id created by mongodb)
});

// takes in id and finds User associated with that ID (opposite to serialize)
passport.deserializeUser((id, done) => {
  console.log('id -> ', id);
  User.findById(id).then((user) => {
    if(user) {
      // user found to that associated ID, req.user points to this user
      done(null, user);
    } else {
      // user with that ID not found, probably new user?  
    }
  })

});

//register 'google' strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback' // route user will be sent to AFTER permission is granted by user to access google profile
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (!existingUser) {
          // creating and saving new User record
          new User({
            googleId: profile.id
          })
            .save()
            .then(newUser => done(null, newUser));
        } else {
          // user already exists in database
          done(null, existingUser); // done(errors, existingRecord)
        }
      });
    }
  )
);
