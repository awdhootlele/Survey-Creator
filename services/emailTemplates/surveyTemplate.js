// returns HTML template which is used for any survey
module.exports = survey => {
  return `
  <html>
  <body>
  <div style="text-align: center;">
  <h3>We would love to hear from you!!</h3>
  <p>Please answer the following question: </p>
  <p>${survey.body}</p>
  <div>
  <a href="http://localhost:3000/">Yes</a>
  <a href="http://localhost:3000/">No</a>
  </div>
  </div>
  </body>
  </html>
  `;
};
