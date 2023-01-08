/*
    The code in this file demonstrates more advanced array concepts and functionalities.
    Therefore, ES6 array functions are covered here.

*/

//Map function - creates a new array based on a function that is run on every element
//in the original array.

//original array
const arrayOfNumbers = [3, 6, 7, 9, 11];

//mapTest now holds the new array
const mapTest = arrayOfNumbers.map(x => x * 2);

console.log(mapTest);

//original array is unchanged
console.log(arrayOfNumbers);

//Filter function - creates a new array with elements that have passed a test implemented by a function
const wordsArray = ['welcome', 'hi', 'no', 'specification', 'pronunciation', 'why', 'and'];

const newArray = wordsArray.filter(word => word.length >= 7);

console.log(newArray);

//Find function - returns the first element that passed a test implemented by a function

const numbersArray = [6, 25, 7, 80, 110, 120];

const elementFound = numbersArray.find(element =>  element > 20);

console.log(elementFound);

//Find index function - returns the first element that passed a test implemented by a function

const arrayOne = [3, 8, 15, 19, 26, 31];

const arrayTest = (element) => element > 15; 

console.log(arrayOne.findIndex(arrayTest));

//Fill function - replaces the specified elements in an array with a value.
//If no position is specified then all elements get replaced with the value.
//Otherwise the syntax is fill(value, start, end) or fill(value, start).

const arrayTwo = [3, 4, 5, 6, 7];

console.log(arrayTwo.fill(40));
console.log(arrayTwo);

const fruits = ["Pear", "Orange", "Strawberry", "Banana"];

console.log(fruits.fill("Pineapple", 1, 3));
console.log(fruits);

//Copy within function - copies array elements and replaces specified elements with the copied elements.
//syntax copyWithin(target) or copyWithin(target, start) or copyWithin(target, start, end).

let arrayThree = [1, 2, 3, 4, 5];

console.log(arrayThree.copyWithin(0, 2, 3));

arrayThree = [1, 2, 3, 4, 5];

console.log(arrayThree.copyWithin(4));

arrayThree = [1, 2, 3, 4, 5];

console.log(arrayThree.copyWithin(1, 4));

//Every function - returns a boolean value indicating whether or not every element passed a test implemented
//by a function.

let arrayFour = ['why', 'van', 'not', 'add', 'air', 'can'];


const checkWordLength = (word) => {
    return word.length === 3;
}

console.log(arrayFour.every(checkWordLength));

//Some function - returns a boolean value indicating whether or not any element passed a test implemented
//by a function.

let arrayFive = [29, 33, 45, 58, 74];

const checkIfGreater = (num) => {
    return num > 70;
}

console.log(arrayFive.some(checkIfGreater));



