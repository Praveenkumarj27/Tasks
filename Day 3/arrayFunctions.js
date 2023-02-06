// Array Functions

// Concat
// The concat() method is used to merge two or more arrays.
//This method does not change the existing arrays, but instead returns a new array.

var array1 = ["a", "b", "c"];
var array2 = ["d", "e", "f"];
var array3 = array1.concat(array2);

console.log(array3);
// Expected output: ["a", "b", "c", "d", "e", "f"]

//-----------------------------------------------------------------------------------------------------------------

// every()
//The every() method tests whether all elements in the array pass the test implemented by the provided function.
//It returns a Boolean value.

var isBelowThreshold = (currentValue) => currentValue < 40;

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true

//-----------------------------------------------------------------------------------------------------------------

// fill();
//The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
//It returns the modified array.

var array1 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(array1.fill(0, 2, 4)); //[1,2,0,0,5]         Fill with 0 from position 2 until position 4

console.log(array1.fill(0, 0, 1)); //[0,2,3,4]           Fill with 0 from position 0 until position 1

console.log(array1.fill(0, 4, 6)); //[1,2,3,4,0,0,7,8]    Fill with 0 from position 4 until position 6

console.log(array1.fill(5, 1));    //  [1,5,5,5,5,5,5,5]   Fill with 5 from position 1

console.log(array1.fill(6));      //[6, 6, 6, 6, 6, 6, 6, 6]    

//---------------------------------------------------------------------------------------------------------
// Filter()
// The filter() method creates a shallow copy of a portion of a given array
// it always i/p.length >= o/p.length
 
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

var result = words.filter(word => word.length > 6);

console.log(result);
// Expected output:  ["exuberant", "destruction", "present"]


var arr=[1,2,3,4]

var result1=arr.filter((w) => w > 2)
console.log(result1);

//---------------------------------------------------------------------------------------------------------------
// find()

//The find() method returns the first element in the provided array that satisfies the provided testing function. 
//If no values satisfy the testing function, undefined is returned.

var array=[1,2,3,4,5]

console.log(array.find(i=>i>2));  //3


//----------------------------------------------------------------------------------------------------------------
//findIndex()
// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. 
//If no elements satisfy the testing function, -1 is returned.


var array=[1,2,3,4,5]

console.log(array.findIndex(i=>i>2));  //2

var array1=[11,12,13,14,15]
console.log(array1.findIndex(i=>i<10));  //-1

//---------------------------------------------------------------------------------------------------------------
// forEach()

// The forEach() method executes a provided function once for each array element.
var array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

//---------------------------------------------------------------------------------------------------------------
 // join()
 //The join() method creates and returns a new string by concatenating all of the elements in 
 //an array (or an array-like object), separated by commas or a specified separator string. 
 //If the array has only one item, then that item will be returned without using the separator.

 var elements = ['Fire', 'Air', 'Water'];
 console.log(elements.join());    ['Fire', 'Air', 'Water'];
 console.log(elements.join(""));   //FireAirWater
 console.log(elements.join(" "));  // Fire Air Water
 console.log(elements.join("-"));  //  Fire-Air-Water

//-------------------------------------------------------------------------------------------------------------------
//map()
// The map() method creates a new array populated with the results of calling a provided function 
// on every element in the calling array.
var array1 = [1, 4, 9, 16];

// Pass a function to map
var map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

//---------------------------------------------------------------------------------------------------------------------
// Pop()
// The pop() method removes the last element from an array and returns that element. 
// This method changes the length of the array.

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

//--------------------------------------------------------------------------------------------------------------------
//Push()
//The push() method adds one or more elements to the end of an array and returns the new length of the array.
var animals = ['pigs', 'goats', 'sheep'];

var count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//------------------------------------------------------------------------------------------------------------------------

//reduce()

//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, 
// in order, passing in the return value from the calculation on the preceding element. The final result of
//  running the reducer across all elements of the array is a single value.

var array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
var initialValue = 0;
var sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

//-------------------------------------------------------------------------------------------------------------------

//reverse()
//The reverse() method reverses an array in place and returns the reference to the same array, the first array 
// element now becoming the last, and the last array element becoming the first. In other words, elements order 
// in the array will be turned towards the direction opposite to that previously stated.

var array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

var reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]

//----------------------------------------------------------------------------------------------------------------
// shift()
//The shift() method removes the first element from an array and returns that removed element. 
//This method changes the length of the array.

var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

//----------------------------------------------------------------------------------------------------------------------------
//slice()
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from 
// start to end (end not included) where start and end represent the index of items in that array. 
// The original array will not be modified.

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));                                         //slice(start,end)
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//-----------------------------------------------------------------------------------------------------------------------
//some()
//The some() method tests whether at least one element in the array passes the test implemented by the provided function.
//  It returns true if, in the array, it finds an element for which the provided function returns true;
//   otherwise it returns false. It doesn't modify the array.

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

//------------------------------------------------------------------------------------------------------------------------------------------
// splice()
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements 
// in place. To access part of an array without modifying it, see slice().
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//-------------------------------------------------------------------------------------------------------------------------------------
// toString()
//The toString() method returns a string representing the specified array and its elements.
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// Expected output: "1,2,a,1a"

//--------------------------------------------------------------------------------------------------------------------------------------
//unShift()
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]

//---------------------------------------------------------------------------------------------------------------------------------------
//values()
//The values() method returns a new array iterator object that iterates the value of each index in the array.
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

//--------------------------------------------------------------------------------------------------------------------------------------------------
