/* eslint no-console: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
const expect = require('expect');
const request = require('supertest');

const { app } = require('../app');
const pjson = require('../package.json');
const statistics = require('../util/statistics');

describe('Template unit test', () => {
  it('should return the root message', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.text).toEqual('Welcome to template!');
      })
      .end(done);
  });

  it('should handle a GET request to /getTest', (done) => {
    request(app)
      .get('/getTest')
      .expect(200)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).toEqual('getTest');
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('should handle a POST request to /postTest', (done) => {
    request(app)
      .post('/postTest')
      .set('Accept', /json/)
      .send({
        testString: 'test'
      })
      .expect(200)
      .expect((res) => {
        expect(res.text).toEqual('postTest');
      })
      .end(done);
  });

  it('should return a 404 for bad request', (done) => {
    request(app)
      .get('/fail')
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('should handle an uncaught express error', (done) => {
    request(app)
      .get('/errorTest')
      .expect(500)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return the correct version', (done) => {
    request(app)
      .get('/version')
      .expect(200)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).toEqual(pjson.version);
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return the start date', (done) => {
    request(app)
      .get('/startDate')
      .expect(200)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).toEqual(statistics.getStartDate());
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return status', (done) => {
    const testStr = 'test status';
    statistics.setStatus(testStr);
    request(app)
      .get('/status')
      .expect(200)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).toEqual(statistics.getStatus());
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  
});
