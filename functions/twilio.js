const twilio = require('twilio');
const twilio_credentials = require('./twilio_credentials');

const accountSid = twilio_credentials.accountSid;
const authToken = twilio_credentials.authToken; 

module.exports = new twilio.Twilio(accountSid, authToken);