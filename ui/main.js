alert ("This is from main.js");

var element=document.getElementById("main-text") ;
element.InnerHTML = "New Value";
 
 
 var button = document.getElementById("counter");
 var count = 0;
 button.onclick = function() {
     count = count+1;
     var span = document.getElementById("count");
     span.innerHTML = counter;
    
 };