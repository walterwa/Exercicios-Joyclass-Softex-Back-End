const { faker } = require('@faker-js/faker');

const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();
const randomCity = faker.location.city();
const randomCountry = faker.location.country();

console.log(`Name: ${randomName}\n Email: ${randomEmail}\n City: ${randomCity}\n Country: ${randomCountry}`);