'use strict';

const mock = require('egg-mock');

describe('test/{{name}}.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/{{name}}-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, {{pluginName}}')
      .expect(200);
  });
});
