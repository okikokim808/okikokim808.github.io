'use strict';

const AWS = require('aws-sdk');
const SES = new AWS.SES();

function sendEmail(formData, callback) {
  const emailParams = {
    Source: 'fsan@franciscopsandoval.com', // SES SENDING EMAIL
    ReplyToAddresses: [formData.reply_to],
    Destination: {
      ToAddresses: ['fsan@franciscopsandoval.com'], // SES RECEIVING EMAIL
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.reply_to}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'New message from https://okikokim808.github.io',
      },
    },
  };

  SES.sendEmail(emailParams, callback);
}

module.exports.staticSiteMailer = (event, context, callback) => {
  const formData = JSON.parse(event.body);

  sendEmail(formData, function(err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      header: {
        'Content-Type': 'application/json',
        'Allow-Access-Control-Origin': 'https://okikokim808.github.io/',
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    };

    callback(null, response);
  });
};