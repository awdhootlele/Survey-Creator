// all survey routes are defined here

const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const mongoose = require('mongoose');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys'); // instead of requiring the model directly (As it is already included inside index.js, we refer that model here)
module.exports = app => {
  app.get('/api/surveys/:surveyId/:feedback', (req, res) => {
    res.send(`<h3 style="text-align: center">Thanks for the response!!!</h3>`);
  });
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    // create new instance (document) of Survey
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    //send email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      // save survey only after emails are sent successfully
      await survey.save();
      // update user credits
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      // 422 -> unprocessable entity
      res.status(422).send(err);
    }
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    // preprocessing on webhook data ->
    //  remove data which does not meet 1. url path of /api/surveys/ 2. has duplicate surveyID and email at same time
    const events = _.map(req.body, event => {
      const { email, url } = event;
      const match = new Path('/api/surveys/:surveyId/:choice').test(
        new URL(url).pathame
      ); // returns an object with {surveyId, choice} if match found else returns null
      // dont destructure from match oj, coz it could be null
      if (match) {
        return { email, surveyId: match.surveyId, choice: match.choice };
      }
      // else returns undefined automatically
    });
    const compactedEvents = _.compact(events); // removes all undefined events
    const uniqueEvents = _.uniqBy(compactedEvents, 'email', 'surveyId'); // removes duplicate data, lookup by email and surveyId props at same time
  });
};
