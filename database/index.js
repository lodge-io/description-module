const mongoose = require('mongoose');

const mongoUri = 'mongodb://172.17.0.2/hostlist';

let db = mongoose.connect(mongoUri);
db = mongoose.connection;

module.exports = db;
