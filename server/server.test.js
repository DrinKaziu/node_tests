const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {

  describe('#GET /', () => {
    it('Should return Hello World!! response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found'
          });
        })
        .end(done);
    });
  });

  describe('#GET /users', () => {
    it('Should include Nacho in users array', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Nacho',
            age: 6
          });
        })
        .end(done);
    });
  });
});
