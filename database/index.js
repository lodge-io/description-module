const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/hostlist';

var db = mongoose.connect(mongoUri);
db = mongoose.connection;
module.exports = db;