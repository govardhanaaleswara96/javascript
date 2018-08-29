// creation of arrays
var array = [10,20,30,40,50,60];
console.log(array);


// Accessing an array and its properties

console.log(array[0]);// 10
console.log(array[3]);// 40

// Access not existed property from an array
console.log(array[95]);// undefined

// adding properties to an array
array[6] = 70;
console.log(array[6]);
// Accessing length of an Array
console.log('no .of elements : ' + array.length);

// reverse the array using reverse()
array = [10,20,30,40,50];
console.log('Before reverse : ' + array);
array.reverse();
console.log('after reverse : ' + array);

// Remove the first value of the array: shift()
array = [10,20,30,40,50];
console.log('Before shift : ' + array);
array.shift();
console.log('after shift : ' + array);

// Add value to front of the array:unshift()
array = [10,20,30,40,50];
console.log('Before unshift : ' + array);
array.unshift(70);
console.log('after unshift : ' + array);

// Remove the last value of the array: pop()
array = [10,20,30,40,50];
console.log('Before pop : ' + array);
array.pop();
console.log('after pop : ' + array);

// Add value the end of the array: push()
array = [10,20,30,40,50];
console.log('Before push : ' + array);
array.push(70);
console.log('after push : ' + array);

// Remove an element from an Array , Arguments: colors.splice(pos,n):
array = [10,20,30,40,50];
console.log('Before splice : ' + array);
array.splice(2,2,80);//(index,elements, value(replace));
console.log('after splice : ' + array);

// Create a copy of an array. Typically assigned to a new variable:slice();
var array1 = [10,20,30,40,50];
var array2 = array1.slice();// creates new copy;
array1.shift();
console.log(array2);// 10,20,30,40 50;
// indexOf()
array = [10,20,30,40,50];
var number = 20;
if(array.indexOf(number)===-1){
  console.log('element is not exists:');// if element is not in array return  -1;
}
else {
  console.log('element is exists @index:' +  array.indexOf(number));
}
// Join()
array = [10,20,30,40,50];
var strArray = array.join(' ');
console.log(strArray);

// Prove an array is an Object

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
