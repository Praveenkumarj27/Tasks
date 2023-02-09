const pi = 3.14;

// function areaOFSomething(r) {
//   var r1 = pi * r * r * r;
//   //console.log(pi*r*r*r);//not rgt place and this is not expected o/p
//   //instead return it back to caller
//   return r1;
// }

// function areaOfCircle(r) {
//   return pi * r * r;
// }

// function areaOfSome(r, h) {
//   return pi * r * r * h;
// }

// var res = areaOFSomething(10) - areaOfCircle(10) - areaOfSome(10, 3);
// console.log(res); //this is expected one

//make only one function and do the above operation
//-------------------------------------------------------------------------------------------------------

function res1(r, h) {
  return pi * Math.pow(r, 3) - pi * Math.pow(r, 2) - pi * Math.pow(r, 2) * h;
}
var result = res1(10, 3);
console.log(result);

//---------------------------------------------------------------------------------------------------

function myConcat(separator) {
  let result = "";

  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

console.log(myConcat(1, 2, 3, 4, 5, 6, 7));

//---------------------------------------------------------------------------------------------------------
// Number.parseInt();
// The Number.parseInt() static method parses a string argument and returns an integer of the
//specified radix or base.

var a = "123.456";
var b = parseInt(a);
console.log(b);

//----------------------------------------------------------------------------------------------------------

// Number.parseFloat();
//The Number.parseFloat() static method parses an argument and returns a floating point number.
//If a number cannot be parsed from the argument, it returns NaN.

var c = parseFloat(a);
console.log(c);

//------------------------------------------------------------------------------------------------------------

// Number.toFixed();
//The toFixed() method formats a number using fixed-point notation.
var d = 123.456;
var e = d.toFixed(1);
console.log(e);

//--------------------------------------------------------------------------------------------------------------

// Number.toExponential();
//The toExponential() method returns a string representing the Number object in exponential notation.

var f = d.toExponential(2);
console.log(f);

//---------------------------------------------------------------------------------------------------------------

var a = 90;

function disp() {
  a = 900;
  console.log("before ", a); //900
  var a = 89;
  console.log("after", a); //89
  this.a = 100;
  console.log("new", a);  //89
}
console.log("before function call", a);  //90
disp();
console.log("after function call ", a); //100
