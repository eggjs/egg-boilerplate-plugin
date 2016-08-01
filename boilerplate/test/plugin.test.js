'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const should = require('should');

describe('test/plugin.test.js',() => {
  let app;
  before(function* (){
    app = mm.app({
      baseDir: 'plugin-test',
    });
    yield app.ready();
  });

  afterEach(mm.restore);

  it('should GET /', function* () {
    yield request(app.callback())
    .get('/')
    .expect(200);
  });

});
