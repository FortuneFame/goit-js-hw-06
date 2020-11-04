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

```js

```

# Задание 4

```js

```

# Задание 5

```js

```

# Задание 6

```js

```

# Задание 7

```js

```

# Задание 8

```js

```

# Задание 9

```js

```

# Задание 10

```js

```
