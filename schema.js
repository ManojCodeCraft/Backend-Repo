const mongoose = require('mongoose');

const { Schema } = mongoose;

const mySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    phone: { type: String, required: true}
});

const User = mongoose.model('User', mySchema);

module.exports = User;