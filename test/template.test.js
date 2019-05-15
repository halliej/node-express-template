/* eslint no-console: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
const request = require('supertest');

const { app, server } = require('../app');
const pjson = require('../package.json');
const statistics = require('../util/statistics');

describe('Template unit test', () => {
  test('should return the root message', async (done) => {
    await request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.text).toEqual('Welcome to template!');
      });
    done();
  });

  test('should handle a GET request to /getTest', async (done) => {
    await request(app)
      .get('/getTest')
      .expect(200)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).toEqual('getTest');
      });
    done();
  });

  test('should handle a POST request to /postTest', async (done) => {
    await request(app)
      .post('/postTest')
      .set('Accept', /json/)
      .send({
        testString: 'test'
      })
      .expect(200)
      .expect((res) => {
        expect(res.text).toEqual('postTest');
      });
    done();
  });

  test('should return a 404 for bad request', async (done) => {
    await request(app)
      .get('/fail')
      .expect(404);
    done();
  });

  test('should handle an uncaught express error', async (done) => {
    await request(app)
      .get('/errorTest')
      .expect(500);
    done();
  });

  test('should return the correct version', async (done) => {
    await request(app)
      .get('/version')
      .expect(200)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).toEqual(pjson.version);
      });
    done();
  });

  test('should return the start date', async (done) => {
    await request(app)
      .get('/startDate')
      .expect(200)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).toEqual(statistics.getStartDate());
      });
    done();
  });

  test('should return status', async (done) => {
    const testStr = 'test status';
    statistics.setStatus(testStr);
    await request(app)
      .get('/status')
      .expect(200)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).toEqual(statistics.getStatus());
      });
    done();
  });

  test('should handle a GET request to /healthcheck', async (done) => {
    await request(app)
      .get('/healthcheck')
      .expect(200)
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).toEqual('healthcheck');
      });
    done();
  });

  afterAll(async done => {
    await server.close();
    done();
  });
  
});
