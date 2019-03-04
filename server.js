const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const app = express();

app.use(cors())
app.use(bodyParser.json())

if ( process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config()
} else if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
}

const port = process.env.PORT || 5000;

const server = http.createServer(app)

server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {
  app, server
}