// Number MAX_VALUE:-

//       The Number.MAX_VALUE static data property represents the maximum numeric value representable in JavaScript.
//       Number.MAX_VALUE has the value of 1.7976931348623157e+308.

// Note:-
//      Values larger than MAX_VALUE are represented as Infinity and will lose their actual value.

// Because MAX_VALUE is a static property of Number, you always use it as Number.MAX_VALUE,
//  rather than as a property of a number value.

// function multiply(x, y) {
//   if (x * y > Number.MAX_VALUE) {
//     return "Process as Infinity";
//   }
//   return x * y;
// }

// console.log(multiply(1.7976931348623157e308, 1));
// // Expected output: 1.7976931348623157e+308

// console.log(multiply(1.7976931348623157e308, 2));
// // Expected output: "Process as Infinity"


// Number.MIN_SAFE_INTEGER:-
// The Number.MIN_SAFE_INTEGER static data property represents the minimum safe integer in JavaScript, or -(253 - 1).
// To represent integers smaller than this, consider using BigInt.


var x = Number.MIN_SAFE_INTEGER - 1;
var y = Number.MIN_SAFE_INTEGER - 2;

console.log(Number.MIN_SAFE_INTEGER);
// Expected output: -9007199254740991

console.log(x);
// Expected output: -9007199254740992

console.log(x === y);
// Expected output: true

var z=Number.MIN_SAFE_INTEGER
console.log("Vlaue of z "+z);


// Number.MAX_SAFE_INTEGER:-
// The Number.MAX_SAFE_INTEGER static data property represents the maximum safe integer in JavaScript (253 – 1).

// For larger integers, consider using BigInt.

var x = Number.MAX_SAFE_INTEGER + 1;
var y = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
// Expected output: 9007199254740991

console.log(x);
// Expected output: 9007199254740992

console.log(x === y);
// Expected output: true


// execution contexts:-
//        There are two types of execution contexts: global and function. The global execution context is created when
// a JavaScript script first starts to run, and it represents the global scope in JavaScript. A function execution 
// context is created whenever a function is called, representing the function's local scope.