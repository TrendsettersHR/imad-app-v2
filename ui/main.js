



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
            
            window.onload =init;
 
 
  // document.getElementById('croc').onclick = function()
  //        {
   //       document.getElementById('croc').style.marginleft = '100px';
  //    };
  
 //document.getElementById("croc").onclick = function() {myFunction()};

//function myFunction() {
//    
 //   document.write("<br/><br/><br/><br/><br/><br Hello <br/> Dolly.");
//};
//window.onload= function()
//{
//alert("Hi am from main.js");
//var element = document.getElementByID("main-text");
//element.innerHTML = "New Value";
//};
alert("Has it changed???");
//$('document').ready(function(){
 //     var element = document.getElementById('main-text');
//      element.innerHTML = 'This value is inserted in the main.js';
//      var img = document.getElementById('croc');
//      img.onclick = function ()
//      {
//          img.style.marginleft = '100px';
//      };
//});