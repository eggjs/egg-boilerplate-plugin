'use strict';

/**
 * Module dependencies.
 */

const request = require('supertest');
const mm = require('egg-mock');
const should = require('should');

describe('test/plugin.test.js',() => {

  let app;
  before(() => {
    app = mm.app({ baseDir: 'app-name' });
  });

  afterEach(mm.restore);

  it('should', done => {
    request(app.callback())
    .get('/')
    .expect(200, done);
  });

});
