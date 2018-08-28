//creation of objects , adding properties ,  retrieval
var fridge ={};
fridge.eggs = 40;
fridge.fruits = 20;
fridge.milk = 5;
console.log(fridge);
// to access individual properties of an objects
console.log("eggs: ", + fridge.eggs);
console.log("fruits: ", + fridge.fruits);
console.log("milk: ", + fridge.milk);

// object literal
 var mobile = {
   color:'black',
   company:'samsang',
   ram:'2gb',
   capacity:'16gb'
    };
console.log(mobile);
console.log('Company Name: ' + mobile.company);

//accessing not existing properties
console.log('Mobile Screen Size:' + mobile.Screen);

// Dot Notation [] Notation
console.log('capacity: ' + mobile.capacity);
console.log('capacity: ' + mobile['capacity']);

//  accessing dynamic properties using [] Notation

var prop = 'color';
console.log('Mobile prop: ' + mobile[prop]);// black

 prop = 'capacity';
console.log('Mobile prop: ' + mobile[prop]);// 16 Gb

// Nested object creation and retrieval

var car = {
  model:'BMW',
  color:'black',
  year:'2030',
  features:{
     airbags: true,
     foglamp:true,
     fuel:'diesel',
     milege:'8kmph'
  }
};
// accessing outside object
console.log(car);

//accessing Nested object
console.log(car.features);

//delete a properties from an object
delete car.features.milege;
console.log(car.features);
