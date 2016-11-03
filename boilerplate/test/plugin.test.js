'use strict';

const path = require('path');
const request = require('supertest');
const mm = require('egg-mock');

describe('test/plugin.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/plugin-test',
      customEgg: path.join(__dirname, '../node_modules/egg'),
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
