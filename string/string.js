/* charAt() string */
var x = "javascript";
var y = x.charAt(4); // return the string character poistion value of character
console.log(y);

/* charCodeAt() string */
var x = "javascript";
var y = x.charCodeAt(1);// return the unicode poistion of string character
console.log(y);

/* concat() string */
var x = "java";
var y = "script";
var z = x.concat(y);// join the Strings return string
console.log(z);

/* endWith() string */
var x = "java script";
var y = x.endsWith("script");// search string the last into  first  return String
console.log(y);

/* fromCharCode */
var x = String.fromCharCode(97);// return string from unicode
console.log(x);

/* includes()*/
var x = "java script"
var y = x.includes("html");// search the string return array
console.log(y);

/* indexof()*/
var x = "java script"
var y = x.indexOf("script");// return the poistion value number search the string poistion
console.log(y);

/* lastIndexof()*/
var x = "java script is a script language"
var y = x.lastIndexOf("script");// search string the first into  last  return search
console.log(y);

/* local compare*/
var x = "java";
var y = "script";
var z = x.localeCompare(y);//region based
console.log(z);


/* match()*/
var x = "java script is a core language"
var y = x.match(/is/g);// search string with match(/i(search lowercase & uppercase )/g(search string global))
console.log(y);


/* repeat()*/
var x = "java script"
var y = x.repeat(5);// return the string with repeat
console.log(y);

/* replace()*/
var x = "java script"
var y = x.replace("script","program");// return the string replace string
console.log(y);

/* search()*/
var x = "java script is a core language"
var y = x.search("core");//search the String return poistion value
console.log(y);

/* slice()*/
var x = "java script"
var y = x.slice(1,10);//return the string depends on poistion
console.log(y);

/* split */
var x = "java script"
var y = x.split("",2);//split the String
console.log(y);


/* startWith()*/
var x = "java script"
var y = x.startsWith("java");// search string the first into  last  return search
console.log(y);


/* substr()*/
var x = "java script is a core language"
var y = x.substr(5,10);// return string search poistion index value and length of string
console.log(y);


/* substrin()g*/
var x = "java script is a core language"
var y = x.substring(5,10);// same as slice bt can't access -ve values
console.log(y);

/* toLocaleLowercase()*/
var x = "JAVA SCRIPT"
var y = x.toLocaleLowerCase();//region depends
console.log(y);


/* toLowercase()*/
var x = "JAVA SCRIPT"
var y = x.toLowerCase();//
console.log(y);

/* toLocaleUppercase()*/
var x = "java script"
var y = x.toLocaleUpperCase();
console.log(y);


/* toUppercase()*/
var x = "java script"
var y = x.toUpperCase();
console.log(y);



/* trim()*/
var x = "          java script              ";//remove empty space in string
var y = x.trim();
console.log(y);


/* valueOf()*/
var x = "java script"
var y = x.valueOf();// return primitive values primitive means basic values  s="5" s=7 but 5 value is not change.
console.log(y);
