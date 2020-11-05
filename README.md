# goit-js-hw-06

Репозиторий по выполнению ДЗ №6 JavaScript

# Задание 1

map Получи массив имен всех пользователей (свойство name) используя
деструктурирующее присваивание для параметра функции ({name}) без пробелов и
переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

Деструктурирующее присваивание для параметра функции PS Деструктурирующее
присваивание (ДП):

1. Объект как параметр без ДП

```js
const object = { num: 2 };
function getNum(obj) {
  return obj.num;
}
console.log(getNum(object)); // 2
```

2. ДП

```js
const object = { num: 2 };
// const num  =  object.num;
const { num } = object;
console.log(num); // 2
```

3. Объект как параметр c ДП

```js
const object = { num: 2 };
//function getNum (obj) { return obj.num; }
function getNum({ num }) {
  return num;
}
console.log(getNum(object)); // 2
```

```js
// Write code under this line
const getUserNames = array => array;

// console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */
```

# Задание 2

Получи массив объектов пользователей, отобранный по цвету глаз (свойство
eyeColor), используя деструктурирующее присваивание для параметра функции
({eyeColor}) без пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

Деструктурирующее присваивание для параметра функции PS Деструктурирующее
присваивание (ДП):

1. Объект как параметр без ДП

```js
const object = { num: 2 };
function getNum(obj) {
  return obj.num;
}
console.log(getNum(object)); // 2
```

2. ДП

```js
const object = { num: 2 };
// const num  =  object.num;
const { num } = object;
console.log(num); // 2
```

3. Объект как параметр c ДП

```js
const object = { num: 2 };
//function getNum (obj) { return obj.num; }
function getNum({ num }) {
  return num;
}
console.log(getNum(object)); // 2
```

```js
// Write code under this line
const getUsersWithEyeColor = (array, color) => array;

// console.log(getUsersWithEyeColor(users, 'blue'));
/* [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  }
] */
```

# Задание 3

Получи массив имен пользователей (значение свойства name) по полу (значение
свойства gender).

Используй деструктурирующее присваивание для параметра функции ({name}) без
пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

```js
// Write code under this line
const getUsersWithGender = (array, gender) => array;

// console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */
```

# Задание 4

Получи массив только неактивных пользователей (отфильтруй по значению свойства
isActive)

Используй деструктурирующее присваивание для параметра функции ({isActive}) без
пробелов и переносов на новую строку.

Используй оператор !.

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

```js
// Write code under this line
const getInactiveUsers = array => array;

// console.log(getInactiveUsers(users));

/* [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  }     
]; */
```

# Задание 5

Получи объект пользователя (не массив) по уникальному значению свойства email.

Используй деструктурирующее присваивание для параметра функции ({email}) без
пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

```js
// Write code under this line
const getUserWithEmail = (array, mail) => array;

// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

/* {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
} */

// console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

/* {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
} */
```

# Задание 6

Получи массив из объектов, которые состоят только из свойств name и email тех
пользователей, которые попадают в возрастную категорию от min до max лет
(значение свойства age).

Сравнение, пример

```js
const x = 13;

// num больше 10 ?
const larger = num > 10; // true

// num меньше 100 ?
const smaller = 100 > num; // true

// num находитя между 10 и 100 ?
const between = smaller && larger; // true
```

Создание анонимных объектов:

```js
const arr = Array(3)
  .fill('')
  .map((e, i) => ({ ['index']: i }));
/* [ { index: 0 }, { index: 1 }, { index: 2 } ] */
```

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

```js
// Write code under this line
const getUsersWithAge = (array, min, max) =>
  array.filter(({ age }) => age).map(({ name, email }) => ({}));

console.log(getUsersWithAge(users, 20, 30));
/* [
    { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
    { name: 'Elma Head', email: 'elmahead@omatom.com' },
    { name: 'Carey Barr', email: 'careybarr@nurali.com' }
] */
console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */
```

# Задание 7

Получи общую сумму баланса (сумму значений свойства balance) всех пользователей.

Используй деструктурирующее присваивание для параметра функции {balance} без
пробелов и переносов на новую строку

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

```js
// Write code under this line
const calculateTotalBalance = array => array;

console.log(calculateTotalBalance(users));
// 20916
```

# Задание 8

Получи массив имен всех пользователей у которых есть друг с заданным именем.

Используй деструктурирующее присваивание для параметра функции {friends}и
({name}) без пробелов и переносов на новую строку

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие
методы.

```js
// Write code under this line
const getUsersWithFriend = (array, friendName) => array;

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]
```

# Задание 9

```js

```

# Задание 10

```js

```
