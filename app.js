const os = require('os');

console.log('platform', os.platform());
console.log('architecture', os.arch());
console.log('user info', os.userInfo().username);

const maleNames = [
  'John',
  'Doe',
  'Wiliam',
  'Smith',
  'Michael',
  'Brown',
];
const fameleNames =[
  'Emma',
  'Grace',
  'Maria',
  'Amanda',
  'Samantha',
  'Iza',
];
const genders = ['M', 'F'];
const lastnames = [
  'Johnson',
  'Williams',
  'Jones',
  'Brown',
  'Davis',
  'Miller',
  'Walker',
  'Hall',
  'Lopez',
  'Scott',
  'Green',
  'Adams',
  'Baker',
  'Gonzalez',
  'Nelson',
];

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (let i = 0; i < 20; i++) {
  const person = {};
  person.gender = randChoice(genders);
  person.lastName = randChoice(lastnames);
  if (person.gender === 'M') {
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(fameleNames);
  }
  person.age = Math.floor(Math.random() * 60 + 18);
  person.email = person.firstName + '.' + person.lastName + '@gmail.com';
  person.tel = Math.floor(Math.random() * 1000000000);
  people.push(person); 
}

const data = JSON.stringify(people);

const fs = require('fs');

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});