//
// GET function for the async data call
//
function loadJSON(callback) {
  let xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      // hardcoded the data object for this excercise, change the data set here
      xobj.open('GET', 'data.json', true);
      xobj.onreadystatechange = function () {
           if (xobj.readyState == 4 && xobj.status == "200") {
             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
             callback(xobj.responseText);
           }
      };
  xobj.send(null);
}

//
// Simple helper func to remove some verbose code since we are using vanilla JS
//
var onClassHndl = function(cls, action, func) {
  let target = document.getElementsByClassName(cls);

  if( target.length === 0 )
    return false;

  //For this project we are assuming singular class names
  //If we REALLY want to be complete, looping through all elements would be trivial here
  target[0].addEventListener(action, func, false);
}
