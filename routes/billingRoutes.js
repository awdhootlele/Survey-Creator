const keys = require('../config/keys');
const stripe = require('stripe')(keys.STRIPE_SECRET_KEY);
module.exports = app => {
  // api to process captured stripe charge
  app.post('/api/stripe', async (req, res, next) => {
    // create stripe charge of $5
    const stripeCharge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });
    console.log(req.user);
    // update user model with 5 credits, req.user refers to current user
    req.user.credits += 5;
    const updatedUser = await req.user.save();
    res.send(updatedUser);
  });
};
