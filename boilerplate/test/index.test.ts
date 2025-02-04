import { mm, MockApplication } from '@eggjs/mock';

describe('test/index.test.ts', () => {
  let app: MockApplication;
  before(() => {
    app = mm.app({
      baseDir: 'apps/example',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', async () => {
    await app.httpRequest()
      .get('/')
      .expect('hi, {{pluginName}}')
      .expect(200);
  });
});
