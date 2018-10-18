const express = require('express');
const app = express();

// MIDDLEWARE
app.use(express.static('public'));
app.get("/", (req, res) => {res.sendFile(__dirname + '/index.html');});

app.post('/contact', (req, res) => {})

// SERVER START
app.listen(3000, () => {
  console.log("HTTP server listening at localhost:3000");
});