const mongoose = require('mongoose'), Schema = mongoose.Schema

const ContactSchema = new Schema({
    name: String,
    email: { 
      type: String, 
      required: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    phone: Number
  })
  
  module.exports = mongoose.model('User', ContactSchema);