const { Router } = require('express');
const Record = require('../models/Record');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { title, artist, year, color, rpm, size } = req.body;
    Record
      .create({ title, artist, year, color, rpm, size })
      .then(record => res.send(record))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Record
      .find()
      .then(records => res.send(records))
      .catch(next);
  });

