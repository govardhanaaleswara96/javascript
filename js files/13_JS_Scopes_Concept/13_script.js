// Block scoping for FOR loop
for(var i = 0; i <= 10; i++){
console.log(i);// 1 to 10
}
console.log(i);// 11

//Block scoping for if Block
var course = 'ECE';
if(course ==='ECE'){
  var job = 'Software Engg'; // also global variables access
}
console.log('course: ' + course);
console.log('job: ' + job);


// Function Scoping
function allocateJob() {
   if(course === 'cse'){
     var salary = '50000'
     }
  }
allocateJob();
//console.log(salary);// cannot access 'salary' because its a child scope data
// acessing area called scope // collection of statement// hoisting
// IIFE example(Immediately Invoked Function Experssion)
// we can access the function as soon as its declared
var person  = 'rich';
function getCar() {
  if(person === 'rich'){
    var car = 'Range Rover';
  }
  console.log('car: ' + car);
}
getCar();
// IIFE
var person  = 'rich';
(function () {
  if(person === 'rich'){
    var car = 'Range Rover';
  }
  console.log('car: ' + car);
}
)();

// Read and Write Operations for variables

// Implications of Read and Write Operations
