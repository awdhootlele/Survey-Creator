const passport = require('passport');

module.exports = app => {
  // invoke 'google' strategy when route is hit, uses create react app proxy
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // when we get 'code' from URL, we authenticate it with passport.authenticate
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      // redirect to api which can be only called after successful authentication/login
      res.redirect('/surveys'); // this is client side route
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout(); // injected by passport -> kills the cookie associated with this request
    // redirect to root (landing) page
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    // passport attached the user property to req object (If we are using passport based cookie management)
    res.send(req.user);
  });
};
