



alert("Hi am from main.js let us see if main-text changes to new value");
document.getElementById("thisone").innerHTML = "Hello" ;
var imgObj = null;
            
            function init(){
               imgObj = document.getElementById('mypic');
               imgObj.style.position= 'relative'; 
               imgObj.style.left = '0px'; 
            }
            alert("now i am moving right by 100");
            function moveRight(){
               imgObj.style.left = parseInt(imgObj.style.left) + 100 + 'px';
            }
            
            // window.onload =init;
 var button = document.getElementById("counter");
 button.onclick = function()
 {
  counter = counter+1;
  var span = document.getElementById("count");
  span.innerHTML = counter.toString();
 };
 
    
 