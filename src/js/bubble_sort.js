// sort
const arr = [2, 34, 73, 85, 55, 22, 1, 0, 3];
const arr2 = ['Bob', 'alex', 'bob', 'Donald', 'Юрий', 'Олег', '1'];
const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 95
  },
  {
    name: "Alex",
    age: 22,
    isMarried: true,
    scores: 89
  },
  {
    name: "Helge",
    age: 24,
    isMarried: true,
    scores: 90
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
    scores: 121
  },
  {
    name: "alex",
    age: 22,
    isMarried: true,
    scores: 89
  },
];

console.log([...students].sort((a, b) => a.age - b.age));
console.log([...students].sort((a, b) => a.name.localeCompare(b.name)));

// bubble sort
const arrNum = [3, 75, 60, -44, -4];

function mySort(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let isSorted = true;

    for(let k = 0; k < arr.length - 1 - i; k++) {
      if(arr[k] > arr[k + 1]) {
        isSorted = false;

        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
      }
    }

    if(isSorted) break;
  }
  return arr;
}

console.log(mySort(arrNum));
