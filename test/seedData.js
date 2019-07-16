const Meme = require('../lib/models/Meme');
const Record = require('../lib/models/Record');

const seedMemes = [
  {
    top: 'Hello',
    bottom: 'there',
    image: 'https://i.kym-cdn.com/entries/icons/original/000/029/079/hellothere.jp'
  }
];

const seedRecords = [
  {
    title: 'Wolfmother',
    artist: 'Wolfmother',
    year: 2006,
    color: 'Black',
    rpm: '33 1/3',
    size: 12
  }
];

function seedData() {
  return Promise.all(seedMemes.map(meme => {
    const { top, bottom, image } = meme;
    return Meme.create({ top, bottom, image });
  }))
    .then(() => {
      return Promise.all(seedRecords.map(record => {
        const { title, artist, year, color, rpm, size } = record;
        return Record.create({ title, artist, year, color, rpm, size });
      }));
    });
}

module.exports = seedData;
