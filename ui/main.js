



alert("Hi am from main.js let us see if main-text changes to new value");
document.getElementById("thisone").innerHTML = "Hello" ;

$(document).ready(function(e) {
    var width = "+=" + $(document).width();
    $("#animate").animate({
    left: width
  }, 5000, function() {
    // Animation complete.
  });
});
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