const cors = require('cors');
const express = require('express');
const app = express();


const memes = require('./routes/memes');

app.use(express.json());
app.use(cors());

app.use('/api/v1/memes', memes);

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
