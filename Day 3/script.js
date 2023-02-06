
// Object.entries()
// The Object.entries() static method returns an array of a given object's own enumerable string-keyed 
// property key-value pairs.

var object1 = {
    name: 'Ajay',
    age: 25
  };

  console.log(Object.entries(object1));
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

//-----------------------------------------------------------------------------------------------------------------

// Object.defineProperty()
// The Object.defineProperty() static method defines a new property directly on an object, or modifies an 
// existing property on an object, and returns the object.

obj2={
    name:"ajay",
    age:25,
}
// obj2.city="chennai"

Object.defineProperty(obj2,'age',{value:56,writable:false})    //default false
console.log(obj2);
obj2.age=82
console.log(obj2);

obj3={}

Object.defineProperty(obj3,'city',{value:"chennai",writable:true})
console.log(obj3.city);           //chennai

//--------------------------------------------------------------------------------------------------------------

// Object.defineProperties()
// The Object.defineProperties() static method defines new or modifies existing properties directly on an object, 
// returning the object.

var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
})

obj.property1="hi"
obj.property2="hi"
console.log(obj.property2);

//----------------------------------------------------------------------------------------------------------------------

// Object.freeze()
// The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes 
// existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties
//  cannot be added, existing properties cannot be removed, their enumerability, configurability, writability,
// or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same
// object that was passed in.


const obj5 = {
    prop: 42
  };
  
  Object.freeze(obj5);
 
  obj5.prop = 33;     //cannot reassign
  
  console.log(obj5);

  obj5.city="chennai"  //cannot  writability
  console.log(obj5);

  //---------------------------------------------------------------------------------------------------------------

// Inheritance using _proto_

//Every object with its methods and properties contains an internal and hidden property known as [[Prototype]].
//  The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. 
//  It is a method by which an object can inherit the properties and methods of another object. 
//  Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf 
//  and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.

//ChildObject.__proto__ = ParentObject

var emp1={
    name:"ajay",
    age: 24,
    city(){
        return "chennai"
    },
    state:"Tamilnadu"

}

var emp2={
    name:"ramesh",
    age:27,

    __proto__:emp1
}

console.log(emp2.state);
console.log(emp2.city());

//--------------------------------------------------------------------------------------------------------------------

// Inheritance using Prototype
//All JavaScript objects inherit properties and methods from a prototype.
  
  function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  }
  
  var myFather = new Person('John', 'Doe', 50, 'blue');
  var myMother = new Person('Sally', 'Rally', 48, 'green');
  
  // We can not add a new property to an existing object constructor:
  
  Person.nationality = 'English';

  // To add a new property to a constructor, you must add it to the constructor function:
  
  function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = 'English';
  }

//   All JavaScript objects inherit properties and methods from a prototype:
  
//   Date objects inherit from Date.prototype
//   Array objects inherit from Array.prototype
//   Person objects inherit from Person.prototype
//   The Object.prototype is on the top of the prototype inheritance chain:
  
//   Date objects, Array objects, and Person objects inherit from Object.prototype.
  
//   Adding Properties and Methods to Objects :
  
//   The JavaScript prototype property allows you to add new properties to object constructors:
  
  function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = 'English';


  //The JavaScript prototype property also allows you to add new methods to objects constructors:
  
  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
  
  var myFather = new Person('John', 'Doe', 22, 'black');
  
  console.log(myFather);
  console.log(myFather.fullName());

//-------------------------------------------------------------------------------------------------------------
// "Use strict"
// to write a clean and secure code  or to code write strict mode

b=9;
console.log(b);

//-----------------------------------------------------------------------------------------------------------------

// D/B this keyword in Regular function and Arrow function;-

// By default both function points to window object
// In this eventListner case Regular function points to respective element and the arrow function points to window object
