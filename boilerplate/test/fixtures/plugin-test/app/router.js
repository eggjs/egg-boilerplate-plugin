'use strict';

module.export = app => {
  app.get('/', function* () {
    this.body = 'hi, egg';
  });
};
