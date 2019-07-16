require('./dataHelpers');
const request = require('supertest');
const app = require('../lib/app');

describe('POST record route', () => {
  it('creates and returns a record', () => {
    return request(app)
      .post('/api/v1/records')
      .send({
        title: 'How Did We Get So Dark?',
        artist: 'Royal Blood',
        year: 2017,
        color: 'Black',
        rpm: '33 1/3',
        size: 12
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'How Did We Get So Dark?',
          artist: 'Royal Blood',
          year: 2017,
          color: 'Black',
          rpm: '33 1/3',
          size: 12,
          __v: 0
        });
        expect(res.status).toEqual(200);
      });
  });
});

describe('GET records route', () => {
  it('returns all records', () => {
    return request(app)
      .get('/api/v1/records')
      .then(res => {
        expect(res.body).toEqual(expect.any(Array));
      });
  });
});
