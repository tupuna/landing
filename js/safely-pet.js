$(document).ready(function () {
	console.log("ready!");

/* top bar script */

myID = document.getElementById("topbar");
var myScrollFunc = function () {
    var y = window.scrollY;
/*this sets the height when the classes switch */    
    if (y >= 600) {
        myID.className = "show"
    } else {
        myID.className = "hide"
    }
};

window.addEventListener("scroll", myScrollFunc);

/* end topbar script */


});

