/*startsWith*/
  var x = "javascript is a client side scripted language";
  var y = x.startsWith("javascript");
  console.log(y);

/* endWith*/
var x = "javascript is a client side scripted language";
var y = x.endsWith("javascript");
console.log(y);

/*include*/

var x = "javascript is a client side scripted language";
var y = x.includes("side");
console.log(y);

/*match*/
var x = "javascript is a client side scripted language";
var y = x.match(/SIDE/i);
console.log(y);

/*replace*/
var x = "javascript is a client side scripted language";
var y = x.replace("client side scripted","very powerfull");
console.log(y);

/*trim */
var x = "       javascript is a client side scripted language"           ;
console.log(x);
console.log(x.trim());

/*valueOf*/
var x = "javascript"
console.log(x.valueOf());

/*toUpperCase*/
var x ="javascript is a client side scripted language";
console.log(x.toUpperCase());

/*charCodeAt*/
var x ="javascript"
var y =x.charCodeAt("1");
console.log(y)

/*fromCharCode*/
var x = String.fromCharCode(97);
console.log(x);

/*charAt*/
var x ='javascript';
var y = x.charAt(0);
console.log(y);

/*repeat*/
var x = 'javascript';
var y = x.repeat('3');
console.log(y);

/*slice*/

var x = 'javascript';
var y = x.slice(1,9);
console.log(y);

/*substring*/

var x = 'javascript';
var y = x.substring(1,9); // substring also same as slice but can't access -ve values.
console.log(y);

/*substr*/

var x = 'javascript is a core language';
var y = x.substr(11,2);
console.log(y);

/* split */
var x = 'javascript';
var y = x.split('');
console.log(y);

/*indexOf*/
var x = 'javascript is a core language';
var y = x.indexOf('is');//right to left search the string
console.log(y);

/*latIndexOf*/
var x = 'javascript is a core language is';
var y = x.lastIndexOf('is');//left to right search the string
console.log(y);

/*search*/
var x ='javascript is a core language';
var y = x.search(/Core/i);
console.log(y);
