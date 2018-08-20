/* charAt() string */
var x = "javascript";
var y = x.charAt(4);
console.log(y);

/* charCodeAt() string */
var x = "javascript";
var y = x.charCodeAt(1);
console.log(y);

/* concat() string */
var x = "java";
var y = "script";
var z = x.concat(y);
console.log(z);

/* endWith() string */
var x = "java script";
var y = x.endsWith("script");
console.log(y);

/* fromCharCode */
var x = String.fromCharCode(97);
console.log(x);

/* insludes()*/
var x = "java script"
var y = x.includes("html");
console.log(y);

/* indexof()*/
var x = "java script"
var y = x.indexOf("script");
console.log(y);

/* lastIndexof()*/
var x = "java script is a script language"
var y = x.lastIndexOf("script");
console.log(y);

/* local compare*/
var x = "java";
var y = "script";
var z = x.localeCompare(y);
console.log(z);


/* match()*/
var x = "java script is a core language"
var y = x.match(/ain/g);
console.log(y);


/* repeat()*/
var x = "java script"
var y = x.repeat(5);
console.log(y);

/* repeat()*/
var x = "java script"
var y = x.replace("script","program");
console.log(y);

/* search()*/
var x = "java script is a core language"
var y = x.search("core");
console.log(y);

/* slice()*/
var x = "java script"
var y = x.slice(1,10);
console.log(y);

/* split */
var x = "java script"
var y = x.split("",2);
console.log(y);


/* startWith()*/
var x = "java script"
var y = x.startsWith("java");
console.log(y);


/* substr()*/
var x = "java script is a core language"
var y = x.substr(5,10);
console.log(y);


/* substrin()g*/
var x = "java script is a core language"
var y = x.substring(5,10);
console.log(y);

/* toLocaleLowercase()*/
var x = "JAVA SCRIPT"
var y = x.toLocaleLowerCase();
console.log(y);


/* toLowercase()*/
var x = "JAVA SCRIPT"
var y = x.toLowerCase();
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
var x = "          java script              "
var y = x.trim();
console.log(y);


/* valueOf()*/
var x = "java script"
var y = x.valueOf();
console.log(y);
