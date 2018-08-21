const passport = require('passport');


module.exports = (app) => {
    // invoke 'google' strategy when route is hit
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );


    // when we get 'code' from URL, we authenticate it with passport.authenticate
    app.get('/auth/google/callback', passport.authenticate('google'));
}