console.log('typeof \'hello\': ', typeof 'hello'); // '', "", ``
console.log('typeof 43: ', typeof 43); // NaN, infinity, -infinity,
console.log('typeof undefined: ', typeof undefined); // undefined
console.log('typeof true: ', typeof true); // false, true
console.log('typeof null: ', typeof null); // null
console.log('typeof {name: \'Alex\'}: ', typeof {name: 'Alex'}); // object, array, function
console.log('typeof 9007199254740991n: ', typeof 9007199254740991n); // bigInt

const num = 3;

const user = {
  name: 'bob',
}

const arr = [
  user,
  {name: 'Alex'}
];

// C - create
// R - read
// U - update
// D - delete

// мутабельно и иммутабельно

const users = [
  {
    id: 1,
    name: "Bob",
    isStudent: true,
  },
  {
    id: 2,
    name: "Alex",
    isStudent: true,
  },
  {
    id: 3,
    name: "Ann",
    isStudent: true,
  },
  {
    id: 4,
    name: "Donald",
    isStudent: true,
  },
]

const newUser = {
  id: 5,
  name: "Farid",
  isStudent: true,
}

// users.push(newUser); // мутабельно
const newObject = [...users, newUser];

console.log('newObject: ', newObject); // иммутабельно


const superUser = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
};

const newSuperUser = {...superUser, phone: "2000"}

console.log('newSuperUser: ', newSuperUser);
console.log(newSuperUser === superUser);

const newSuperUser2 = {...superUser, address: {...superUser.address, suite: "hello"}};

console.log('newSuperUser2: ', newSuperUser2);
console.log(newSuperUser === newSuperUser2);

const newSuperUser3 = {...superUser, address: {...superUser.address, geo: {...superUser.address.geo, lat: "hello))"}}}

console.log('newSuperUser3: ', newSuperUser3);
console.log(newSuperUser2 === newSuperUser3);
