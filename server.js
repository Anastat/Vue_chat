const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const path = require('path');
const http = require('http');
const serveStatic = require('serve-static');

const app = express();

app.use(cors())
app.use(bodyParser.json())

if ( process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config()
} else if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(serveStatic(__dirname + '/dist'));
}

app.get('*', function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});

const port = process.env.PORT || 5000;

const server = http.createServer(app)

server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {
  app, server
}