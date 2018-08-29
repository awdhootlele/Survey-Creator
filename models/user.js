const mongoose = require('mongoose');
const {Schema} = mongoose;

// creating users schema
const userSchema = new Schema({
    googleId: String
});

// creating 'users' collection with 'usersSchema'
// Existing collection will not be overridden
mongoose.model('users', userSchema);