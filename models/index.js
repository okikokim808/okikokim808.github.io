// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/project-1', { useNewUrlParser: true })

const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/project-1"
// , {useMongoClient: true}
);

module.exports.Contact = require('./contact');