require('dotenv').config();
const mongoose = require('mongoose');
const seedData = require('./seedData');
const Meme = require('../lib/models/Meme');

const connect = require('../lib/utils/connect');

beforeAll(() => {
  return connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

beforeEach(() => {
  return seedData();
});

afterAll(() => {
  return mongoose.connection.close();
});

const getMeme = () => {
  return Meme
    .findOne()
    .then(meme => {
      return JSON.parse(JSON.stringify(meme));
    });
};

module.exports = {
  getMeme
};
