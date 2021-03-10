// SIMPLE, "NOT SECURE" GMAIL CONNECTION (DOES NOT WORK CURRENTLY)

const nodemailer = require('nodemailer');
const credits = require('./config');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: credits.USER,
    pass: credits.PASSWORD
  }
});

const mailOptions = {
  from: credits.USER,
  to: 'vilma.ikonen@edu.bc.fi',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});