// Assignment operator =
var fileName = 'operators';
console.log('fileName:' + fileName);

// Arithmetic operators + - * /
var x = 10;
var y = 20;
var sum = x + y;
console.log('the sum is:' + sum);
// Short hand math += , -= , *= , /=
var p = 10;
var q = 20;
var add = 0;
add = add + (p + q);// 0 + 10 + 20 =30;
add += (p + q);// 30 + 30 =60;
console.log('sum:' + add);

// Conditional operators < , > , <= , >= , !=
var ages = 20;
if(ages >= 18){
  console.log('Your Major');
}
else {
  console.log('Your Minor')
}
// Unary Operator ++ , -- (pre , post)
a = 10;
a = a + 1;//11(10+1);
a +=1;//12(11+1);
a++;//13(12+1);
console.log('the value of a:' +a);

// Logical operators AND , OR
var inRelation = true;
var parentsAgreed = false;
if(inRelation && parentsAgreed){
  console.log('Get Marry Soon');
}
else {
  console.log('Wait until thr parents agreed')
}


// String Concatenation Operator
var str = 10 + 20 + '20' + 40 + 20;
console.log(str);

// Ternary operator (? :)
age = 25;
(age < 18) ? console.log('You are Minor'):
console.log('You are Major');

// Type of operator
var abc ;
abc = 10;
console.log('value: ' + abc + ' Data type: ' + typeof abc);
abc = 'test';
console.log('value: ' + abc + ' Data type: ' + typeof abc);
abc = true;
console.log('value: ' + abc + ' Data type: ' + typeof abc);
abc = null;
console.log('value: ' + abc + ' Data type: ' + typeof abc);


// == operator
 a = 10;
 b = '10';
if(a == b){// o/p: Both are Equal
  console.log('Both are Equal');
}
else {
  console.log('Both are Not Equal');
}

// === operator
 a = 10;
 b = '10';
if(a === b){// both are not Equal because it no same type
  console.log('Both are Equal');
}
else {
  console.log('Both are Not Equal');
}
