/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
var piValue = Math.PI;
console.log('PI value: ' + piValue);
// Math sqrt
var sqrt = Math.sqrt(144);
console.log('Sqrt of 144: ' + sqrt);
// find the min of 4 numbers
var min = Math.min(10,100000,4444,6666,2222);
console.log('minimum value: ' + min);
// find the Max of 4 numbers
var max = Math.max(10,100000,4444,6666,2222);
console.log('maximum value: ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2,4);
console.log('2^4 is: ' + pow);
// generate the random numbers from 0 to 100
var random = (Math.round(Math.random()*100000)).toString();
console.log(random);
document.querySelector('#display').textcontent =random;


/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
var today = new Date();
console.log('todays date: ' + today);
// Get proper date
function myFunction(time) {
      if(time <= 9){
        return '0'  + time;
      }
      else {
        return time;
      }
}
var date =today.getDate() + '-' + myFunction(today.getMonth()+1) +'-' +today.getFullYear();
console.log(date);
// get full day of the week using switch statement
var day = new Date().getDay();
var str = '';
switch (day) {
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

// Display a Digital Clock on the web page
function indiantime() {
  var today = new Date();
  var options = {timezone : 'Asia/Kolkata'};
  var time = today.toLocaleTimeString('en-US',options);
  document.querySelector('#clock').textContent = time;
}

/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
var num1 = 123;
console.log('value: ' + num1  + ' type: ' + typeof num1);

//convert number to String
var strNum = num1.toString();
console.log('value: ' + strNum + ' type: ' + typeof strNum );

// convert  String to numbers
var num2 = parseInt(strNum);
console.log('value: ' + num2 + ' type: ' + typeof num2);

//display currenece values
var num3 = 5000;
var currenecy = num3.toFixed(2);
console.log('currenecy $: ' + currenecy)
/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
//tolowercase
var greet ='Good Morning';
console.log(greet.toLowerCase());

//touppercase
var greet ='Good Morning';
console.log(greet.toUpperCase());

//count the numbers of 'o';
var str = 'Good Morning';
function countZeros(str){
     var temp = 0;
     for(var i = 0; i < str.length;i++){
       var ch = str.charAt(i);
       if(ch === 'o'){
         temp++;
       }
       }
  return temp;
}
var zero = countZeros(str);
console.log('count: ' + zero);

// to reverse the String
 str = 'Good Morning';
function reverseStr(str) {
       var temp = '';
      for(var i = str.length-1; i > 0; i--);{
        temp += str.charAt(i);
      }
      return temp;
}
var revStr = reverseStr(str);
console.log(revStr);
//getSting format of numbers.
var someNumber = 1234;
function getStrNumber(str) {
      var temp ='';
      var strNumber = str.toString();
      for(var i = 0; i<strNumber.length;i++){
        var ch = parseInt(strNumber.charAt(i));
        switch (ch) {
          case 0:
             temp += 'zero';
            break;
          case 1:
             temp += 'one';
             break;
          case 2:
             temp += 'two';
             break;
          case 3:
             temp += 'three';
             break;
          case 4:
             temp += 'four';
             break;
          case 5:
             temp += 'five';
             break;
          case 6:
             temp += 'six';
             break;
          case 7:
             temp += 'eight';
             break;
          case 8:
            temp += 'nine';
            break;
          case 9:
            temp += 'zero';
            break;
          default:
            temp +='';
            break;
        }
      }
  return temp;
}
var strNumber = getStrNumber(someNumber);
console.log(strNumber);
console.log('******number convert to string*****');
//
var myNumber = '123';
function displaystrNumber(str) {
       var tempStr ='';
       var array =['zero','one','two','three','four','five','six','seven','eight','nine'];
       for( var i=0;i < str.length; i++ ){
         var index = parseInt(str.charAt(i));
         tempStr += array[index] + " ";
       }
   return tempStr;
}
strNumber = displaystrNumber(myNumber);
console.log(strNumber);
//palondrome
var firstStr ='ABCBA';
function isPalidrome(firstStr) {
      var revStr = '';
      for(var i = firstStr.length-1; i >= 0; i--){
          revStr += firstStr.charAt(i);
      }
      if(firstStr === revStr){
        return 'it is a palindrome string';
      }
      else {
         return 'its not a palindrome string';
      }
}
var output = isPalidrome(firstStr);
console.log(output);
