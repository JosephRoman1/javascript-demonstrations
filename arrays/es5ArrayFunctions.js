/*
    The code in this file demonstrates basic array concepts and functionalities.
    Therefore, no ES6 array functions are covered here.

*/

//Creating arrays

const fruits = ["Apple", "Pear", "Orange", "Strawberry", "Banana"];

const drinks = [
    "coffee",
    "water",
    "soda",
    "milk"
];

const instruments = [];
instruments[0] = "Violin";
instruments[1] = "Guitar";
instruments[2] = "Piano";
instruments[3] = "Drum";
instruments[4] = "Cello";

const vehicles = new Array("Plane", "Car", "Bus", "Train", "Motorcycle");

const variousTypes = [5, "hello", 3.4, false];

//Accessing elements in an array

console.log("Fruits array:");
console.log(fruits);

console.log("Drinks array:");
console.log(drinks);

console.log("Instruments array:");
console.log(instruments);

console.log("Vehicles array:");
console.log(vehicles);

console.log("Various Types array:");
console.log(variousTypes);

console.log("Accessing fruits[3]: " + fruits[3]);
console.log("Accessing drinks[0]: " + drinks[0]);
console.log("Accessing instruments[4]: " + instruments[4]);
console.log("Accessing vehicles[1]: " + vehicles[1]);
console.log("Accessing variousTypes[2]: " + variousTypes[2]);

let currentFruit = fruits[2];
console.log("current fruit is " + currentFruit);

//Changing elements in an array

vehicles[1] = "Van";
console.log(vehicles);

//What is the data type of an array in JavaScript?  (Object)

console.log(typeof fruits + '\n');

//============================= Array methods ==========================

//Push method - adds one element to the end of an array

console.log("============== Push method example ==============" + '\n')

let newArray = [5, 9, 1, 0, 8, 5, 3];
console.log("Array values before calling the push method: ");
console.log(newArray);
newArray.push(70);
newArray.push(80);
newArray.push(82);
console.log("Array values after calling the push method with values 70, 80, and 82: ");
console.log(newArray);

//Pop method - removes one element from the end of an array

console.log("============== Pop method example ==============" + '\n')

newArray = [5, 9, 1, 0, 8, 5, 3];
console.log("Array values before calling the pop method: ");
console.log(newArray);
newArray.pop();
console.log("Array values after calling the pop method: ");
console.log(newArray);
newArray.pop();
console.log("Array values after calling the pop method again: ");
console.log(newArray);

//Shift method - removes the first element of an array
//can also return the element that was removed

console.log("============== Shift method example ==============" + '\n')

newArray = [5, 9, 1, 0, 8, 5, 3];
console.log("Array values before calling the shift method: ");
console.log(newArray);
newArray.shift();
console.log("Array values after calling the shift method: ");
console.log(newArray)

let removedValue = newArray.shift();
console.log("Array values after calling the shift method again: ");
console.log(newArray);
console.log('\n' + "element removed from the front is " + removedValue + '\n');

//Unshift method - adds element(s) to the beginning of an array
//can also return the new length of an array

console.log("============== Unshift method example ==============" + '\n')

newArray = [5, 9, 1, 0, 8, 5, 3];
console.log("Array values before calling the unshift method: ");
console.log(newArray);
newArray.unshift(95);
console.log("Array values after calling the unshift method with value 95: " + '\n');
console.log(newArray);

newArray.unshift(150, 160);
console.log('\n' + "Array values after calling the unshift method with values 150 and 160: " + '\n');
console.log(newArray);
console.log();

//Length method - returns the number of elements in an array

newArray = [5, 9, 1, 0, 8, 5, 3];
console.log("Array values before calling the length method: ");
console.log(newArray);
console.log("Array values after calling the length method: ");
console.log(newArray.length);

//Sort method - sorts an array

newArray = [5, 9, 1, 0, 8, 5, 3];
console.log("Array values before calling the sort method: ");
console.log(newArray);
console.log("Array values after calling the sort method: ");
console.log(newArray.sort());


//What happens when an array is copied into another array?

let arrayOne = [];
let arrayTwo = [1, 9, 3, 4, 7];

arrayOne = arrayTwo;

console.log("arrayOne values are " + arrayOne);
console.log("arrayTwo values are " + arrayTwo);

arrayTwo.push(6);

console.log("arrayOne values are " + arrayOne);

arrayOne.push(100);

console.log("arrayTwo values are " + arrayTwo);




