const { Router } = require('express');
const Meme = require('../models/Meme');

module.exports = Router()
  .get('/', (req, res, next) => {
    Meme
      .find()
      .then(memes => res.send(memes))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Meme
      .findById(req.params.id)
      .then(meme => res.send(meme))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    const { top, bottom, image } = req.body;
    Meme
      .create({ top, bottom, image })
      .then(meme => res.send(meme))
      .catch(next);
  })
  .put('/:id', (req, res, next) => {
    const { top, bottom, image } = req.body;

    Meme
      .findByIdAndUpdate(req.params.id, { top, bottom, image }, { new: true })
      .then(meme => res.send(meme))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Meme
      .findByIdAndDelete(req.params.id)
      .then(meme => res.send(meme))
      .catch(next);
  });
