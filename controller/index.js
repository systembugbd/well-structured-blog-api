const getHomeController = require('./home');
const getAppHealthCheckerController = require('./app');
const { getBlogController, getBlogByIdController } = require('./blog');

module.exports = {
  getHomeController,
  getAppHealthCheckerController,
  getBlogController,
  getBlogByIdController,
};
