const Meme = require('../lib/models/Meme');

const seedMemes = [
  {
    top: 'Hello',
    bottom: 'there',
    image: 'https://i.kym-cdn.com/entries/icons/original/000/029/079/hellothere.jp'
  }
];

function seedData() {
  return Promise.all(seedMemes.map(profile => {
    const { top, bottom, image } = profile;
    return Meme.create({ top, bottom, image });
  }));
}

module.exports = seedData;
