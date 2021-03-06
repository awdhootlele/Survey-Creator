// returns HTML template which is used for any survey
const keys = require('../../config/keys');
// we can have different routes based on responses to show to user and then do some custom work on those routes
module.exports = survey => {
  return `
  <html>
  <body>
  <div style="text-align: center;">
  <h3>${survey.subject}</h3>
  <p>Please answer the following question: </p>
  <p>${survey.body}</p>
  <div>
  <a href="${keys.REDIRECT_DOMAIN}/api/surveys/${survey.id}/yes">Yes</a>
  <a href="${keys.REDIRECT_DOMAIN}/api/surveys/${survey.id}/no">No</a>
  </div>
  </div>
  </body>
  </html>
  `;
};
