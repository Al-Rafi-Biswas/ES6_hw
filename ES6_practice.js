// variable declar korar koykta upay........
// .................................................................................................................................................

// var, let, const

// var diya onek ber variabel declar kora jay and vaiable er value update kora jay

var varVariable = "this is a var variable";

var varVariable = "this is a second variable";

varVariable = "this is update variable";

console.log(varVariable);
// .................................................................................................................................................
// Ei khetre variable declar korte jamela hoy karon sober nicer update variable ta log korle asbe and sober ses e je var use kora hobe seta kaj korbe.

// let diya diya variable declar kora jay and update kora jay variable er value but second time variable er name aki declar korle error asbe.

let letVariable = "this is let variable";

letVariable = "this let  is update variable";

// let letVariable = "this is second variable"; (eki variable name 2 ber lekhar karone error ase)

console.log(letVariable);
// .................................................................................................................................................

// const variable declar sudu ek ber kora jabe ei variable er  second time  and update kora jay na .

const constVariable = "this is const variable";

// constVariable = "this is const update variable"; (ekhane update kora jabe na error ase)

console.log(constVariable);

// .................................................................................................................................................

// scope  ............

// 1. block_scope, 2. function_scope, 3. global_scope

// 1.block_scope......

// block_scope e block er vitore sudu declar kora variable gula use kora jabe kintu block er vaire jodi block er vitorer variable use korte chai seta error asbe but var diya declar kora variable show korbe karon var akta global variable .

{
  var a = "this is var";
  let b = "this is let";
  const c = "this is const";
}

console.log(a);
console.log(b);
console.log(c);

// .................................................................................................................................................

// 2. function_scope .............
//  fuction er vitorer variable vaire  use kora jabe na
function abc() {
  var a = "this is var";
  let b = "this is let";
  const c = "this is const";
}
console.log(a);
abc();

// 3. golobal......
var a = "this is var";
let b = "this is let";
const c = "this is const";
function abc() {
  console.log(c);
}

abc();

// problem 2 solve...........................................................................................................

// Create a function named greet that takes two parameters: name and greeting, with greeting having a default value of "Hello". If no greeting is provided, the function should output "Hello, [name]!".

// arrow function use...

let fuction2 = (names, grating = "hello") => {
  return `${grating}${names}`;
};

console.log(fuction2(" rafi"));

// problem 3 solve .........................................................................................
// Using template literals, write a function that takes three parameters: firstName, lastName, and age, and returns a string in the format: "My name is [firstName] [lastName] and I am [age] years old.".

let func = (firsName, lastName, age) => {
  return `I am ${firsName}${lastName}. I am ${age} years old`;
};
console.log(func("Md.Al Rafi", " Biswas", " 20"));

// problem 4 solove................................................................................................................................................

// Write an arrow function named add that takes two parameters and returns their sum. Rewrite it as a one-line function without using the return keyword.

let add = (first, second) => {
  sum = first + second;
  return sum;
};
console.log(add(2, 4));

let anontherAdd = (a, b) => a + b;
console.log(anontherAdd(2, 3));

// problem  5 solove...........................................................................................................................
// Write a function that accepts any number of arguments and returns the maximum value among them using the spread operator. Test it with varying numbers of arguments.

let arryfun = (...arg) => {
  let sum = Math.max(...arg);

  return sum;
};

console.log(arryfun(3, 44, 566, 7, 77, 888, 9));

// problem 6 solve..........................................................................................
// Create a function mergeArrays that takes two arrays as arguments and returns a single array containing all elements of the two arrays, without modifying the original arrays, using the spread operator.

const arry1 = [1, 2, 3];
const array2 = [4, 5, 6];
// const mergeArrays = [...arry1,...array2]

let mergeArraysFun = (arry1, array2) => {
  const mergeArrays = [...arry1, ...array2];
  return mergeArrays;
};
console.log(mergeArraysFun(arry1, array2));

// problem 7 solve.....................................................................................................................
// Given an object person with properties name, age, and country, write a function that extracts name and country using object destructuring and returns them in an array.

let personObj = {
  name: "Rafi",
  age: 20,
  city: "Barishal",
};

let { name: R, age: old, city: home } = personObj;

let personFunc = (name, country) => {
  return [name, country];
};
console.log(personFunc(R, home));

// problem 8 solve..................................................................................................................................................
// Write a function that takes an array of numbers as input, and uses array destructuring to extract the first, second, and third elements, returning them in an object with properties first, second, and third.

let objFunction = (numbers) => {
  let [first, second, third] = numbers;
  return { first, second, third };
};

console.log(objFunction([10, 30, 50, 70]));

// problem 9 solve............................................................................................................
// Create a function that takes an object representing a book with properties title, author, year, and publisher. Use destructuring to extract title and author, and return a formatted string: "Title: [title], Author: [author]".

const allBook = (book) => {
  let [title, author, year, publisher] = book;
  return `title: ${title}, author: ${author}, year: ${year} `;
};
console.log(allBook(["seser kobita", "Robinronath", 3, "kolkata"]));

// problem 10 solve......................................................................................................................
// Given an array of numbers, write a function that uses the spread operator to copy the array, then adds a new number at the end without modifying the original array.

let arrayA = [1, 2, 3, 4, 5];
let arrayB = [6, 7, 8, 9, 10];

let arrayfunc = (a, b) => {
  let single = [...a, ...b];
  return single;
};

console.log(arrayfunc(arrayA, arrayB));

// .................................................................................................................................................
