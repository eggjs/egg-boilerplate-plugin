const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.{{pluginName}}.name;
    this.logger.warn('plugin config: %o', this.app.config.{{pluginName}});
  }
}

module.exports = HomeController;
