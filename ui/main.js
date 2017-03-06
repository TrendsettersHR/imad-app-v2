alert("Hi am from main.js");
//var element = document.getElementByID("main-text");
//element.innerHTML = "New Value";
//window.onload= function()
//{
//alert("Hi am from main.js");
//var element = document.getElementByID("main-text");
//element.innerHTML = "New Value";
//};
$('document').ready(function(){
      var element = document.getElementById('main-text');
      element.innerHTML = 'This value is inserted in the main.js';
      var img = document.getElementById('croc');
      img.onclick = function ()
      {
          img.style.marginleft = '100px';
      };
});