const faker = require('faker');;
const fs = require('fs')
// const bus = require('./images/bus.png');

// for (let i = 0; i < 15; i++) {
//   console.log(faker.random.number(4)+1);
// }

// let firstName = faker.name.firstName();
// let lastName = faker.name.lastName();
// let pic = 'https://source.unsplash.com/random'
// let title = faker.lorem.words(Math.floor(Math.random() * 7));
// let city = faker.address.city();
// let country = faker.address.country();

// let guests = faker.random.number(9) + 1;
// let beds = faker.random.number(4) + 1;
// let bedrooms = faker.random.number(4) + 1;

// var bathArray = [1, 1.5, 2, 2.5]
// let baths = bathArray[Math.floor(Math.random() * 4)]; // array?

// let superHost = faker.random.boolean();
// let selfCheckIn = faker.random.boolean();
// let rating = faker.random.number(4) + 1;

// let description = faker.lorem.paragraphs(10);

// let license = faker.address.stateAbbr() + faker.random.number({min: 100000000000, max: 1000000000000});

// let public = bus;

// let doc = {
//   firstName : firstName,
//   lastName : lastName,
//   pic : pic,
//   title : title,
//   city : city,
//   country : country,
//   guests : guests,
//   beds : beds,
//   bedrooms : bedrooms,
//   baths : baths,
//   superHost : superHost,
//   selfCheckIn : selfCheckIn,
//   rating : rating,
//   description : description,
//   license : license,
// }

// console.log(doc)

function generateUsers() {

  let users = []

  for (let id=1; id <= 110; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let pic = 'https://source.unsplash.com/random'
    let title = faker.lorem.words(Math.floor(Math.random() * 7));
    let city = faker.address.city();
    let country = faker.address.country();

    let guests = faker.random.number(9) + 1;
    let beds = faker.random.number(4) + 1;
    let bedrooms = faker.random.number(4) + 1;

    var bathArray = [1, 1.5, 2, 2.5]
    let baths = bathArray[Math.floor(Math.random() * 4)]; // array?

    let superHost = faker.random.boolean();
    let selfCheckIn = faker.random.boolean();
    let rating = faker.random.number({min: 85, max: 100});

    let description = faker.lorem.paragraphs(10);

    let license = faker.address.stateAbbr() + faker.random.number({min: 100000000000, max: 1000000000000});

    users.push({
      'firstName' : firstName,
      'lastName' : lastName,
      'pic' : pic,
      'title' : title,
      'city' : city,
      'country' : country,
      'guests' : guests,
      'beds' : beds,
      'bedrooms' : bedrooms,
      'baths' : baths,
      'superHost' : superHost,
      'selfCheckIn' : selfCheckIn,
      'rating' : rating,
      'description' : description,
      'license' : license,
    });
  }

  return users
}

let dataObj = generateUsers();
// console.log(dataObj)
fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));