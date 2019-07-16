const { getMeme } = require('./dataHelpers');
const request = require('supertest');
const app = require('../lib/app');

describe('GET memes route', () => {
  it('returns a list of memes', () => {
    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual(expect.any(Array));
        expect(res.body[0]).toEqual({
          _id: expect.any(String),
          top: expect.any(String),
          bottom: expect.any(String),
          image: expect.any(String),
          __v: 0
        });
        expect(res.status).toEqual(200);
      });
  });
});

describe('GET meme by id route', () => {
  it('returns a meme by its id', async() => {
    const { _id } = await getMeme();
    return request(app)
      .get(`/api/v1/memes/${_id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: expect.any(String),
          bottom: expect.any(String),
          image: expect.any(String),
          __v: 0
        });
        expect(res.status).toEqual(200);
      });
  });
});

describe('POST meme route', () => {
  it('returns the created meme', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'top-test',
        bottom: 'bottom-test',
        image: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/Meme-Wallpapers.jpg'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: 'top-test',
          bottom: 'bottom-test',
          image: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/Meme-Wallpapers.jpg',
          __v: 0
        });
        expect(res.status).toEqual(200);
      });
  });
});
