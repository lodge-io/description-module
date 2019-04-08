const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const SingleOwner = require('../database/schema.js').SingleOwner; 

const app = express();
const port = 3117;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/host/:hostid', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`http://localhost:${port} WORKS`);
});

app.get('/api/host/:hostid', (req, res) => {
  SingleOwner.find({ hostid: req.params.hostid })
    .then(hostData => res.send(hostData))
    .catch(() => { res.status(404); });
});
