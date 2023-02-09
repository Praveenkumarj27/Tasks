// case1
// function outer(){
//     console.log('i am executing...parent/outer')
//     function inner(){
//         console.log('i am executing...child/inner')
//     }
//     console.log(inner)
//     return inner;
// }
// console.log('hi');
// var globalref_toInner=outer();//callee
// console.log(globalref_toInner)                  //==>outer()()
// globalref_toInner()




// case2 - problem statement

// function outer() {
//   console.log("i am executing...parent/outer");
//   var outer = 90;
//   function inner() {
//     outer = 678;
//     console.log("i am executing...child/inner ", outer);
//   }
//   console.log("value of outer variable now is :: ", outer);
//   // console.log(inner)
//   return inner;
// }
// console.log('hi');
// var globalref_toInner=outer();//callee
// console.log(globalref_toInner)
// globalref_toInner()



// var t=7
// function f(){
//     t=90;
//     console.log(t)
// }
// console.log(t)
// f()
// console.log(t)




// case3
// function outer(){
//     console.log('i am executing...parent/outer')
//     var outer=90;
//     function inner(){
//         outer=678;
//         console.log('i am executing...child/inner ',outer)
//     }
//   //  inner()
//    // console.log('value of outer variable now is :: ',outer)
//     // console.log(inner)
//     return inner;
// }
// console.log(outer());//callee




// case 4
// function outer(t) {
//   console.log("i am executing...parent/outer");
//   function inner() {
//     console.log("i am executing...child/inner ", t);
//   }
//   return inner;
// }
// var ret = outer(10); //function inner(){console.log('i am executing...child/inner ',t)}
// console.log(ret);
// ret();




// var num=7;
// function myfunction(){
//     var num=90;
//     var res=num%2==0?'even':'odd'
//     console.log('i completed execution & numb is :: ',res);
// }
// myfunction()
// console.log(num)


//-------------------------------------------------------------------------------------------------------------------

// var message = 'Hello';
// function buildGreeting() { 
//     let audience = 'World';
//     console.log(message + ' '+ audience);
// }
// buildGreeting()


// var message = 'Hello';
// function buildGreeting() { 
//     let audience = 'World';
// let message = 'Hello';

// function buildGreeting() { 
//     let audience = 'World';
//     console.log(message + ' '+ audience);
// }
// }
// console.log(audience);              //not defined




// function buildGreeting() {
//   let message = 'Hello';
// }
// function greetUser() {
//   let audience = 'World';
//   console.log(message);
// }

// greetUser();        


// function buildGreeting() {
//   let message = 'Hello';
// }

// function greetUser() {
//   let audience = 'World';
//   console.log(message);
// }

// greetUser();                //not defined
 
 
// let message = 'Hello';

// function buildGreeting() {
//    console.log(message);                   //hello
//    let audience = 'World';

//    function greetUser() {
//         console.log(message + ' ' + audience);             //hello world
//     }

//     greetUser();
// }

// buildGreeting();




// function buildGreeting() {
//   let message = 'Hello';

//   function greetUser() {
//       console.log(message);
//   }

//   return greetUser;
// }
// let hello = buildGreeting();
// hello();                             //hello


// function buildGreeting(message) {
//   return function(audience){
//        return message + ' ' + audience;
//   }
// }
// let greeting1 = buildGreeting('Hi');
// let greeting2 = buildGreeting('Hello');

// console.log(greeting1('User')); // Hi User            
// console.log(greeting2('World')); // Hello World    
	