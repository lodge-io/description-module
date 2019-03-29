const express = require('express');

const app = express();
const port = 3117;
const bodyParser = require('body-parser');
const path = require('path');
const SingleOwner = require('../database/schema.js').SingleOwner;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`http://localhost:${port} WORKS`);
});

app.get('/host', (req, res) => {
  SingleOwner.find().then(data => res.send(data));
});
