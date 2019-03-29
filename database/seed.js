const db  = require('./index.js');
const SingleOwner = require('./schema.js').SingleOwner;
const fake = require('../data.js').fakedata;

var data = fake;
// console.log(data[0])
const insertSampleSingleOwners = function () {
  SingleOwner.create(data)
    .then(() => db.close());
};

insertSampleSingleOwners();
