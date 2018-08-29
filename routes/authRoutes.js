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

    app.get('/api/logout', (req, res) => {
        req.logout(); // injected by passport -> kills the cookie associated with this request
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        // passport attached the user property to req object (If we are using passport based cookie management)
        res.send(req.user);
    });
}