// get the number Element
var numberElement = document.querySelector('#number');
var displayElement = document.querySelector('#text-number');

// add an event listener
numberElement.addEventListener('keyup', function () {
  var tempStr ='';
  var str = numberElement.value;
  var array =['zero','one','two','three','four','five','six','seven','eight','nine'];
  for( var i=0;i < str.length; i++ ){
    var index = parseInt(str.charAt(i));
    tempStr += array[index] + " ";
  }
      displayElement.textContent = tempStr;
});
