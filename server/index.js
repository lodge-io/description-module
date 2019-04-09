const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { SingleOwner } = require('../database/schema.js');

const app = express();
const port = 3116;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/host/:hostid', express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.listen(port, () => {
  console.log(`http://localhost:${port} WORKS`);
});

app.get('/api/host/:hostid', (req, res) => {
  SingleOwner.find({ hostid: req.params.hostid })
    .then(hostData => res.send(hostData))
    .catch(() => { res.status(404); });
});
