



alert("Hi am from main.js let us see if main-text changes to new value");
var element = document.getElementByID("main-text");
element.innerHTML = "New Value";
//window.onload= function()
//{
//alert("Hi am from main.js");
//var element = document.getElementByID("main-text");
//element.innerHTML = "New Value";
//};
alert("Has it changed???");
$('document').ready(function(){
      var element = document.getElementById('main-text');
      element.innerHTML = 'This value is inserted in the main.js';
      var img = document.getElementById('croc');
      img.onclick = function ()
      {
          img.style.marginleft = '100px';
      };
});