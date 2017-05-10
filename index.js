'use strict';

module.exports = {
  name: {
    desc: 'package name(will publish to npm as egg-{name})',
  },
  pluginName: {
    desc: 'plugin name will be camelcase',
    default(vars) {
      return camelcase(vars.name);
    },
    filter: camelcase,
  },
  description: {
    desc: 'plugin description',
  },
  author: {
    desc: 'plugin author',
  },
};

function camelcase(str) {
  return str && str.replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase());
}
