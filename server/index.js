//with oAuth2, not working currently
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const credits = require('./config');

const oAuth2Client = new google.auth.OAuth2(credits.CLIENT_ID, credits.CLIENT_SECRET, credits.REDIRECT_URI);

oAuth2Client.setCredentials({refresh_token: credits.REFRESH_TOKEN});

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      host: credits.HOST,
      port: credits.PORT,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: credits.USER,
        clientId: credits.CLIENT_ID,
        clientSecret: credits.CLIENT_SECRET,
        refreshToken: credits.REFRESH_TOKEN,
        accessToken: accessToken
      }
    })

    const mailOptions = {
      from: credits.USER,
      to: credits.TEST_RECIPIENT,
      subject: 'New message from contact form',
      text: 'Hello from test email!',
      html: '<h1>Hello from test email</h1>!'
    }
    
    const result = await transport.sendMail(mailOptions);
    return result;
  } 
  catch (err) {
    return err
  }
}

sendMail()
.then((result) => console.log('Email has been send', result))
.catch((error) => console.log(error.message));

// transporter.verify((error, success) => {
//   if(error) {
//     console.log(error)
//   }
//   else {
//     console.log('Server is ready to take messages')
//   }
// })

// //FOR TESTING:
// const transport = {
//   host: credits.TEST_HOST,
//   port: credits.TEST_PORT,
//   auth: {
//     user: credits.TEST_USER,
//     pass: credits.TEST_PASSWORD
//   },
//   debug: true,
//   logger: true
// };
