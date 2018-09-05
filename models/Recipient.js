const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipientSchema = new Schema({
  email: String,
  responded: {
    type: Boolen,
    default: false
  }
});
// instead of creating new collection, we are going to export it to be used as sub-collection inside another collection
module.exports = RecipientSchema;
