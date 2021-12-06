const express = require('express');
const { getAppHealthCheckerController } = require('../controller');

const app = express();

app.get('/health', getAppHealthCheckerController);

module.exports = app;
