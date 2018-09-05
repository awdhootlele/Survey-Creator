// Mailer class that constructs Mailer object which is sent to sendGrid for email dispatch
const sendGrid = require('sendgrid');
const helper = sendGrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();
    // all following 'this' members are inherited from sendGrid's Mail class
    this.sgApi = sendGrid(keys.SENDGRID_KEY); // configure sendGrid API
    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    // add body to email content (addContent -> inherited)
    this.addContent(this.body);
    // track body clicks (helper function)
    this.addClickTracking();
    // helper function to register sendGrid Email to sendgrid mailer object
    this.addRecipients();
  }
  formatAddresses(recipients) {
    // converts email string to SendGrid Email object
    return recipients.map(({ email }) => {
      // format email
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    // all sendGrid related click tracking goes here - no documentation available which says why we wrote what we wrote
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    // register these settings to sendGrid (this.addTrackingSettings -> inherited)
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    // create sendGrid personalization instance from all recipients
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    // register all recipients to sendGrid (this.addPersonalization -> inerited)
    this.addPersonalization(personalize);
  }

  async send() {
    //use sendGrid API to send Mailer to sendGrid
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON() // JSONify this instance
    });
    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
