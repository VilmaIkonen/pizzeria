const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const credits = require('./config');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3002);

// const transport = {
//   host: '',
//   port: 587,
//   auth: {
//     user: credits.USER,
//     password: credits.PASSWORD
//   }
// }

// const transporter = nodemailer.createTransport(transport)

//FOR TESTING:
const transport = {
  host: credits.TEST_HOST,
  port: credits.TEST_PORT,
  auth: {
    user: credits.TEST_USER,
    pass: credits.TEST_PASSWORD
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if(error) {
    console.log(error)
  }
  else {
    console.log('Server is ready to take messages')
  }
})

let mail = {
  from: 'example user',
  to: 'user1@example.com',
  subject: 'New message from contact form',
  text: 'Hello from test email!'
}

transporter.sendMail(mail, (error, info) => {
  if(error) {
    return console.log(error)
  }
  console.log('Message sent: %s', info.messageId)
})

// router.post('/send', (req, res, next) => {
//   let name = req.body.name;
//   let email = req.body.email;
//   let message = req.body.message;
//   let content = `name: ${name} \n email: ${email} \n message: ${message}`

//   let mail = {
//     from: name,
//     to: process.env.USER,
//     subject: 'New message from contact form',
//     text: content
//   }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({status: 'fail'})
//     }
//     else {
//       res.json({status: 'success'})
//     }
//   })
// })