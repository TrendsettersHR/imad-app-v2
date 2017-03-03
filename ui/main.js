// console.log('Loaded!');

// self executing function here
(function() {
   // your page initialization code here
   // the DOM will be available here
   // write HTML modifying code here

})();
//let me add this line so that it can read the next line..

var element = document.getElementById("main-text"
);
alert("Executed Up to here");
element.InnerHTML = "This value is inserted in the main.js";
 
lert("Executed after assigning new value to element");
var img = document.getElementById("croc");
img.onclick = function ()
{
    img.style.marginleft = "100px";
};
