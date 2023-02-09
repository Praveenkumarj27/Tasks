// Function.prototype.call()
// The call() method calls the function with a given this value and arguments provided individually.
// case 1:-
var student = {
  fname: "ajay",
  lname: "kumar",
};

function details(age, role) {
  console.log(` I am ${this.fname}${this.lname} and my age is ${age} and my role is ${role}`);
}

details.call(student, 32, "trainee");

// case 2:-

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  var f1=new Food('cheese', 5)
  console.log(f1);                   //Food { name: 'cheese', price: 5, category: 'food' }
  console.log(f1.name);             // cheese

//   Case 3:-

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // Logs "globProp value is Wisen"

// case 4:-

"use strict";

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // throws TypeError: Cannot read the property of 'globProp' of undefined

//--------------------------------------------------------------------------------------------------------

// Function.prototype.apply()
// The apply() method calls the specified function with a given this value, and arguments provided as
//  an array (or an array-like object).

var Employee = {
    fname: "Ajith",
    lname: "kumar",
  };
  function details1(age,role) {
    console.log(` I am ${this.fname}${this.lname}  my age is ${age} and my role is ${role}`);
  };
  details1.apply(Employee,[32,"Software Trainee"]);


  //------------------------------------------------------------------------------------------------------------------

//   Function.prototype.bind()
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
// with a given sequence of arguments preceding any provided when the new function is called.

// example 1:-

  var Employee1 = {
    fname: "vishnu",
    lname: "vishal",
  };

  function details2(age,role) {
   return(` I am ${this.fname}${this.lname},${age} years old and my role is ${role}`);
  };
var result=details2.bind(Employee1,43,"trainee")
console.log(result());


//example 2:-
var module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  x=900;
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
//   Expected output: 42

//----------------------------------------------------------------------------------------------------------------

// Method Chanining

// Chaining Methods, also known as Cascading, refers to repeatedly calling one method after another on an
// object, in one continuous line of codeObject.

//  Method1 ( ) . Method2 ( ) . Method3 ( );

// Chaining Methods can be done only if all the methods are Chainable by returning the current object
