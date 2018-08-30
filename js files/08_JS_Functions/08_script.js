//creation of a simple function with no args and execute a function
function greet() {// function declartion / definition
  console.log('Good Morning');
}
greet();// Function call / function Execution

//creation of a simple function with args
function carEngine(fuel) { // parameters
  console.log(' Iam from car engine i got the fuel: ' + fuel);
}
carEngine('diesel');
carEngine('water');

// executing a function with less number of params
function giveMeLessGifts(chocolates,biscuts) {
  console.log('chocolates: ' + chocolates + ' biscuts: ' + biscuts);
}
giveMeLessGifts(40);
//executing a function with more number of params
function giveMeLessGifts(chocolates,biscuts) {
  console.log('chocolates: ' + chocolates + ' biscuts: ' + biscuts);
}
giveMeLessGifts(40,20,'Gifts');

//function overloading is not possible here

// functions with return values
function iceCreamBox(money) {
  // preparing ice cream
    var iceCream = 'Ice Cream Rs: ' + money;
    return iceCream;
}
var cone = iceCreamBox(50);
console.log(cone);

//function with empty return /no return
function iceCreamBox2(money) {
  // preparing ice cream
    var iceCream = 'Ice Cream Rs: ' + money;
    }
var cone2 = iceCreamBox2(50);
console.log(cone2);

// function Expressions with name and execution
var greetFn = function () {
  console.log('Iam From greetFn function Expression: ');
}
greetFn();

// Functions as arguments without args
function greet1(name) {
  console.log('Iam From Greet 1: ' + name);
}
function greet2(name) {
  console.log('Iam From Greet 2: ' + name);
}
function greetEngine(fName,name) {
   fName(name);
}
greetEngine(greet1,'john');


// Functions in Objects and Execution
var student ={
  firstName:'arjun',
  lastName:'reddy',
  fullName:function () {
    console.log(this.firstName + '' + this.lastName);
    }
};
console.log(student.fullName());


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */
var employee = {
  name:'john',
  age:30,
  desg:'manager',
  address:{
    city:'hyderabad',
    state:'telangana',
    country:'india'
  },
  isFromState : function (state) {
       return employee.address.state === state;
    },
 isFromCity : function (city) {
       return employee.address.city === city;
    },
 isFromCountry : function (country) {
       return employee.address.country === country;
    }
};
console.log('is From telangana ? ' + employee.isFromState('telangana'));
console.log('is from hyderabad ? ' + employee.isFromCity('hyderabad'));
console.log('is From india ? ' + employee.isFromCountry('india'));



// Default Function Arguments (arguments)
function defalutArgs() {
    console.log(arguments);
}
defalutArgs('john',40,'manager');
