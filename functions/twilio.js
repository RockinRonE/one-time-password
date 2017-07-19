const twilio = require('twilio');

const accountSid = 'AC5580bad6b1835f61191902d4285cd91a';
const authToken = 'c2f1cca39a211a53b0508b0b74b5c621';

module.exports = new twilio.Twilio(accountSid, authToken);