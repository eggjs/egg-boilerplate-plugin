export interface {{pluginName}}Config {
  foo: string;
}

/**
 * egg-{{name}} default config
 * @member Config#{{pluginName}}
 * @property {String} SOME_KEY - some description
 */
export default {
  {{pluginName}}: {
    foo: 'bar',
  } as {{pluginName}}Config,
};

declare module '@eggjs/core' {
  // add EggAppConfig overrides types
  interface EggAppConfig {
    {{pluginName}}: {{pluginName}}Config;
  }
}
