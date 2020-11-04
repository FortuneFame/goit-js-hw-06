// Write code under this line
const object = { name : ""}
function getNames ({name}) { return name; }
const getUserNames = users => {
  return users.map(user => user.name)
};

 console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */
