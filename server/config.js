const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  TEST_RECIPIENT: process.env.TEST_RECIPIENT,
  
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  REDIRECT_URI: process.env.REDIRECT_URI,
  REFRESH_TOKEN: process.env.REFRESH_TOKEN, 
  ACCESS_TOKEN: process.env.ACCESS_TOKEN, 

  CLIENT_ID2: process.env.CLIENT_ID2,
  CLIENT_SECRET2: process.env.CLIENT_SECRET2,
  REFRESH_TOKEN2: process.env.REFRESH_TOKEN2,

  TEST_HOST: process.env.TEST_HOST,
  TEST_PORT: process.env.TEST_PORT,
  TEST_USER: process.env.TEST_USER,
  TEST_PASSWORD: process.env.TEST_PASSWORD
}