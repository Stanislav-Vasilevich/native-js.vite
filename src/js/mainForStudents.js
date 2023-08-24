const students = [
  {
    id: 1,
    name: 'Bob',
    age: 22,
    isMarried: true,
    scores: 85,
    // к 14 задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
  },
  {
    id: 2,
    name: 'Alex',
    age: 21,
    isMarried: true,
    scores: 90,
  },
  {
    id: 3,
    name: 'Nick',
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    id: 4,
    name: 'John',
    age: 19,
    isMarried: false,
    scores: 100
  },
  {
    id: 5,
    name: 'Helen',
    age: 20,
    isMarried: false,
    scores: 110
  },
  {
    id: 6,
    name: 'Ann',
    age: 20,
    isMarried: false,
    scores: 105
  },
];
const user = {
  name: 'Bob',
  age: 23,
  friends: ['Alex', 'Nick', 'John']
}
const superUser = {
  name: 'Bob',
  age: 23,
  friends: [
    {
      id: 1,
      name: 'Ann',
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      id: 2,
      name: 'Alex',
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      id: 4,
      name: 'John',
      age: 19,
      isMarried: false,
      scores: 100
    }
  ]
}
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//1. Создайте полную (глубокую) копию объекта user
let deepCopyUser;
deepCopyUser = {...user, friends: [...user.friends]};
console.log('1: ', user === deepCopyUser);

//2. Создайте полную (глубокую) массива students
let deepCopyStudents;
deepCopyStudents = students.map(s => ({...s}));
console.log('2:', deepCopyStudents === students);

//3. Создайте полную (глубокую) копию объекта superUser
let deepCopySuperUser;
deepCopySuperUser = {...superUser, friends: superUser.friends.map(s => ({...s}))}
console.log('3: ', deepCopySuperUser.friends[0] === superUser.friends[0]);

//4. Отсортируйте students по успеваемости (лучший идёт первым)(sort)
let sortedByScores;
sortedByScores = students.sort((a, b) => b.scores - a.scores);
console.log('4', sortedByScores);

//5. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents;
bestStudents = students.filter(s => s.scores >= 100);
console.log('5: ', bestStudents);

//6. Сформируйте массив имён студентов (map)
let studentsNames;
studentsNames = students.map(s => s.name);
console.log('6: ', studentsNames);

//7. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents;
trueStudents = students.map(s => ({ ...s, isStudent: 'true' }));
console.log('7: ', trueStudents);

//8. Nick женился. Выполните соответствующие преобразование массива
// students (map)
let studentsWithMarriedNick;
studentsWithMarriedNick = students.map(s => s.name === 'Nick' ? {...s, isMarried: true} : s);
console.log('8: ', studentsWithMarriedNick);

// Внесите  следующие изменения в объект superUser:
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//9.Удалите объект с id=1 из массива  friends
let superUserCorrect1;
// superUserCorrect1 = {superUser, friends: superUser.friends.filter(s => s.id !== 1)}
// console.log('9: ', superUserCorrect1);

//10. поменяйте объекту с id=2 из массива friends значение св-ва name на
// "Donald"
let superUserCorrect2;
superUserCorrect2 = superUser.friends.map(s => s.id === 2 ? {...s, name: 'Donald'} : s);
console.log('10: ', superUserCorrect2);

//11. добавьте в список друзей нового друга
const newFriend = {
  id: 5,
  name: 'Nick',
  age: 27,
  isMarried: false,
  scores: 99
}
let superUserCorrect3;
superUserCorrect3 = {...superUser, friends: [...superUser.friends, newFriend]};
console.log('11: ', superUserCorrect3);

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом не используя методы массивов и
// Math.max()*
let bestStudent = students[0];

for(let i = 0; i < students.length; i++) {
  if(students[i].scores > bestStudent.scores) {
    bestStudent = students[i]
  }
}

console.log('12: ', bestStudent);

//13. Найдите сумму баллов всех студентов (reduce)*
let scoresSum = students.reduce((sum, st) => sum + st.scores, 0);
console.log(scoresSum)

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
  const newStudentsArr = students.map(s => ({...s, friends: []}));
  for(let i = 0; i < students.length; i++) {
    for(let j = 0; j < students.length; j++) {
      if(i !== j) {
        newStudentsArr[j].friends.push(students[i].name)
      }
    }
  }
  return newStudentsArr;
}
console.log('14: ', addFriends(students));

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента
// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]
