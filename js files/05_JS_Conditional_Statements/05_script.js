// If Else condition Example
var time = 10;
if( time <= 12){
  console.log('Good Morning');
}
else if (time > 12 && time <= 17) {
  console.log('Good Afternoon');
}
else if (time > 17 && time <= 24) {
  console.log('Good Evening');
}
else {
  console.log('Enter proper time');
}

// For loop Example to display from 1 - 10 values
var output='' ;
for(var i = 1 ; i <= 10 ; i++ ){// initilization,condition,increment.
  if(i <= 9){
  output += i + " , ";
            }
  else   {
  output += i;
         }
}
console.log(output);
document.querySelector('#display') .textContent = output;


// While loop Example to display from 1 - 10 values
output ='';
i = 1;// initilization
while (i <= 10) {// condition
  if(i <= 9){
  output += i + " - ";
            }
  else   {
  output += i;
         }
  i++;// increment
}
console.log(output);
document.querySelector('#display') .textContent = output;


// Do while loop Example to display from 1 - 10 values
output = '';
i = 1;//initilization
do{
  if(i <= 9){
  output += i + " * ";
            }
  else   {
  output += i;
         }
      i++;//increment
    }
while (i <= 10);//condition

console.log(output);
document.querySelector('#display') .textContent = output;
// Switch Statement Example
var today = new Date().getDay();
var str = '';
switch (today) {
  case 0:
    str= 'sunday';
    break;
  case 1:
    str= 'monday';
    break;
  case 2:
    str= 'tuesday';
    break;
  case 3:
    str= 'wednesday';
    break;
  case 4:
    str= 'thursday';
    break;
  case 5:
    str= 'friday';
    break;
  case 6:
    str= 'saturday';
  break;
  default:
    str ='';
    break;
}
console.log('today is: ' + str);
