const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

// for now, our survey only accepts yes/no kind of input (single question)
const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: {
    // how many recipients have responded yes
    type: Number,
    default: 0
  },
  no: {
    // how many recipients have responded no
    type: Number,
    default: 0
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, // the user this survey belongs to. (_ means this is a reference to another collection, just a convo)
  dateSent: Date,
  lastResponded: Date // last time any recipient has responded to this survey
});

mongoose.model('surveys', surveySchema);
