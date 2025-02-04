# @eggjs/{{name}}

[![NPM version][npm-image]][npm-url]
[![Test coverage][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@eggjs/{{name}}.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@eggjs/{{name}}
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/{{name}}.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/{{name}}?branch=master
[snyk-image]: https://snyk.io/test/npm/@eggjs/{{name}}/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@eggjs/{{name}}
[download-image]: https://img.shields.io/npm/dm/@eggjs/{{name}}.svg?style=flat-square
[download-url]: https://npmjs.org/package/@eggjs/{{name}}

<!--
Description here.
-->

## Install

```bash
npm i @eggjs/{{name}}
```

## Usage

```js
// {app_root}/config/plugin.js
exports.{{pluginName}} = {
  enable: true,
  package: '@eggjs/{{name}}',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.{{pluginName}} = {
};
```

see [src/config/config.default.ts](src/config/config.default.ts) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

## Contributors

[![Contributors](https://contrib.rocks/image?repo=eggjs/{{name}})](https://github.com/eggjs/{{name}}/graphs/contributors)

Made with [contributors-img](https://contrib.rocks).
