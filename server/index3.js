// With oAuth2, Postman status Ok, but mail not coming through to real address from there
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const credits = require('./config');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

const myOAuth2Client = new OAuth2(
  credits.CLIENT_ID2,
  credits.CLIENT_SECRET2,
  credits.REDIRECT_URI
)

myOAuth2Client.setCredentials({refresh_token: credits.REFRESH_TOKEN2});

const myAccessToken = myOAuth2Client.getAccessToken();

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: credits.USER,
    clientId: credits.CLIENT_ID2,
    clientSecret: credits.CLIENT_SECRET2,
    refreshToken: credits.REFRESH_TOKEN2,
    accessToken: myAccessToken
  }
})

// default endpoint:
app.get('/', (req, res) => {
  res.send({message: 'Default route in pizzeria contact form'})
});

app.post('/sendemail', (req, res) => {

  const mailOptions = {
    from: credits.USER,
    to: req.body.email,
    subject: 'Hello from test nodemailer email',
    text: 'You received this email via nodemailer',
    html: '<p>You received this email via nodemailer<p>'
  }
  transport.sendMail(mailOptions, (err, result) => {
    if(err) {
      res.send({message: err})
    }
    else {
      res.send({message: 'Email has been send, check your inbox'});
      transport.close();
    }
  })
})

app.listen(PORT, (req, res) => {
  console.log(`App listening on port ${PORT}`)
});
