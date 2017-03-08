



//alert("Hi am from main.js let us see if main-text changes to new value");
//document.getElementById("thisone").innerHTML = "Hello" ;
var imgObj = null;
   var counter = 0;
            
            function init(){
               imgObj = document.getElementById('mypic');
               imgObj.style.position= 'relative'; 
               imgObj.style.left = '0px'; 
            }
   //         alert("now i am moving right by 100");
   var add = (function() {
  var counter = 0 ;
    return function() {return counter += 1;};
        
    });
    
function moveRight(){
               imgObj.style.left = parseInt(imgObj.style.left) + 100 + 'px';
                document.getElementById("demo").innerHTML = add();
}
   
             window.onload =init;
 