require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = require('./app/app');
const router = require('./routes/router');

const PORT = process.env.PORT || 8000;
const http = require('http');
const server = http.createServer(app);

app.use([morgan('dev'), cors(), router]);

server.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
});
