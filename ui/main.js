



//alert("Hi am from main.js let us see if main-text changes to new value");
//document.getElementById("thisone").innerHTML = "Hello" ;
var imgObj = null;
 
            
            function init(){
               imgObj = document.getElementById('mypic');
               imgObj.style.position= 'relative'; 
               imgObj.style.left = '0px'; 
            }
   //         alert("now i am moving right by 100");
            function moveRight(){
               imgObj.style.left = parseInt(imgObj.style.left) + 100 + 'px';
              // count = count + 1;
              
               //alert ("where is count shown?");
             //  var x = document.getElementById("count");
             //  alert ("did you find the count displayed?");
            }
            
             window.onload =init;
// var button = document.getElementById("counter");
//button.onclick = function()
//;
 
    
 