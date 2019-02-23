const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('ci with travis');
});

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports = server;