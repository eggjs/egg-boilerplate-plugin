# egg-{{name}}

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-{{name}}.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-{{name}}
[travis-image]: https://img.shields.io/travis/eggjs/egg-{{name}}.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-{{name}}
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-{{name}}.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-{{name}}?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-{{name}}.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-{{name}}
[snyk-image]: https://snyk.io/test/npm/egg-{{name}}/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-{{name}}
[download-image]: https://img.shields.io/npm/dm/egg-{{name}}.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-{{name}}

<!--
Description here.
-->

## Install

```bash
$ npm i egg-{{name}} --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.{{pluginName}} = {
  enable: true,
  package: 'egg-{{name}}',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.{{pluginName}} = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
