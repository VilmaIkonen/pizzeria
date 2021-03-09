const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  TEST_HOST: process.env.TEST_HOST,
  TEST_PORT: process.env.TEST_PORT,
  TEST_USER: process.env.TEST_USER,
  TEST_PASSWORD: process.env.TEST_PASSWORD
}