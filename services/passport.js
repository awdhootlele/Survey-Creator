const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

//register 'google' strategy
passport.use(
    new GoogleStrategy(
      {
        clientID: keys.GOOGLE_CLIENT_ID,
        clientSecret: keys.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback' // route user will be sent to AFTER permission is granted by user to access google profile
      },
      (accessToken, refreshToken, profile, done) => {
        console.log('accessToken: ', accessToken, 'refreshToke,: ', refreshToken, 'profile: ', profile , 'done: DONE');
      }
    )
  );