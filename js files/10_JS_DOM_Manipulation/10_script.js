//BOM Operations

// width of the browser
var width = window.innerWidth;
console.log('width: ' + width + 'px');

// height of the browser
var height = window.innerHeight;
console.log('height: ' + height + 'px');
// Open a new Tab
window.open('http://www.google.co.in');
// print method
function printDoc() {
  window.print();
}
// DOM Properties to get body , title , URL
 var body = document.body;
 console.log(body);
 //title
 var title = document.title;
 console.log(title);
 //URL
 var url = document.URL;
 console.log(url);
//DOM Methods
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
//document.querySelector();
//document.querySelectorAll();

// Access and Change the Elements

// DOM Events
var h1Element = document.querySelector('#display');
h1Element.textContent = 'good Morning';
h1Element.style.color = 'white';

var h2Element = document.querySelector('h2');
h2Element.style.backgroundColor='forestgreen';
h2Element.style.color='white';

// js Events handeling
var inputElement = document.querySelector('#user');
var error = document.querySelector('#error');
function getUser() {
  var username = inputElement.value;
  if(username === 'Govardhan'){
    inputElement.style.backgroundColor='lightgreen';
    inputElement.style.borderColor ='green';
    error.textContent ='Vaild username';
    error.style.color='green';
  }
  else {
    inputElement.style.backgroundColor='lightblue';
    inputElement.style.borderColor ='red';
    error.textContent ='Enter Vaild username';
    error.style.color='red';
  }
}
//inputElement.value ='';

// js Events listeners
//get the Element

var buttonElement = document.querySelector('#button');
// hookup an event listener
 buttonElement.addEventListener('click',function () {

    var username = inputElement.value;
    if(username === 'Govardhan'){
      inputElement.style.backgroundColor='lightgreen';
      inputElement.style.borderColor ='green';
      error.textContent ='Vaild username';
      error.style.color='green';
    }
    else {
      inputElement.style.backgroundColor='lightblue';
      inputElement.style.borderColor ='red';
      error.textContent ='Enter Vaild username';
       error.style.color='red';
     }
  });

// event listener for TextBox Element
var textBoxElement = document.querySelector('#user');

// hookup an event listener
textBoxElement.addEventListener('keyup',function () {
    var username = inputElement.value;
    if(username === 'Govardhan'){
      inputElement.style.backgroundColor='lightgreen';
      inputElement.style.borderColor ='green';
      error.textContent ='Vaild username';
      error.style.color='green';
    }
    else {
      inputElement.style.backgroundColor='lightblue';
      inputElement.style.borderColor ='red';
      error.textContent ='Enter Vaild username';
      error.style.color='red';
    }

});
