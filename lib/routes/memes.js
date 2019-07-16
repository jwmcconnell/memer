const { Router } = require('express');
const Meme = require('../models/Meme');

module.exports = Router()
  .get('/', (req, res, next) => {
    Meme
      .find()
      .then(memes => res.send(memes))
      .catch(next);
  });
