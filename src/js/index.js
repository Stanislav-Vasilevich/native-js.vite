const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,

  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    // scores: 89
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100
  },
  ''
];

function map(array, fn) {
  const arr = [];
  for(let i = 0; i < array.length; i++) {
    arr[i] = fn(array[i]);
  }

  return arr;
}

// console.log(map(students, st => st.name));

function filter(array, fn) {
  const newArr = [];
  for(let i = 0; i < array.length; i++) {
    if(fn(array[i])) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

// console.log(filter(students, st => st.name.length > 4));

function find(array, fn) {
  for(let i = 0; i < array.length; i++) {
    if(fn(array[i])) {
      return array[i];
    }
  }
}

console.log(find(students, st => st.name === 'Nick'));

function Fun() {
  this.name = 'Alex';
  this.age = 23;
}

console.log(new Fun());

const itPush = (array, newItem) => {
  array[array.length] = newItem;

  return array.length;
}

console.log(itPush([1, 2, 3], 4));

const arr = [2, 3, 4];

const itPop = (array) => {
  const lastItem = array.length -1;
  array.length = array.length - 1;

  return lastItem;
}

console.log(itPop(arr));
console.log(arr);

const arr2 = [3, 4, 5, 6];

const itReverse = (array) => {
  const result = [];
  for(let i = 0; i < array.length; i++) {
    result[array.length - 1 - i] = array[i];
  }
  return result;
}

console.log(itReverse(arr2));

const arr3 = [2, 3, 4, 5, 6];

const itToReverse = (array) => {
  for(let i = 0; i < Math.floor(array.length / 2); i++) {
    const temp = array[array.length - 1 - i];
    array[array.length = 1 - i] = array[i];
    array[i] = temp;
  }
}

itToReverse(arr3)
console.log(arr3);

const arr4 = [2, 5, 45, 67, 6];

const itSlice = (arr, startIndex = 0, endIndex = arr.length) => {
  const result = [];

  for(let i = startIndex; i < endIndex; i++) {
    result[i - startIndex] = arr[i];
  }

  return result;
}

console.log(itSlice(arr4, 0, 2));
console.log(itSlice(arr4));

const itIncludes = (array, elem, startIndex = 0) => {
  const start = startIndex < 0 ? array.length + startIndex : startIndex;

  for (let i = start; i < array.length; i++) {
    if(elem === array[i]) {
      return true;
    }
  }
  return false;
}

const arr5 = [2, 5, 45, 67, 6];

console.log(itIncludes(arr5, 5));
console.log(itIncludes(arr5, 0));
console.log(itIncludes(arr5, 2, 1));
console.log(itIncludes(arr5, 2, -5));

const itIndexOf = () => {

}
