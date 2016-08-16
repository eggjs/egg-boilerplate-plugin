'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/plugin.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/plugin-test',
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
    .get('/')
    .expect('hi, egg')
    .expect(200);
  });

});
