require('./dataHelpers');
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
      });
  });
});
