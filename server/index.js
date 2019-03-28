var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var path = require('path');
var SingleOwner = require('../database/schema.js').SingleOwner;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`http://localhost:${port} WORKS`);
});

app.get('/host', (req, res) => {
  SingleOwner.find().then(data => res.send(data));
})

