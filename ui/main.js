console.log('Loaded!');
//let me add this line so that it can read the next line..

var element = document.getElementById("main-text");
alert("Executed Up to here");
element.InnerHTML = "This value is inserted in the main.js";
var img = document.getElementById("croc");
img.onclick = function ()
{
    img.style.marginleft = "100px";
};
