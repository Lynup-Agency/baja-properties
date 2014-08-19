$(document).ready(function(){  

/* Home Page Rotator Script - itterates through initialBg array of images 
-------------------------------------------------------------------------
*/  
	var initialBg =  $('#rotator').css("background-image"); 
	var firstTime = true;
	var arr = [initialBg, "url(../img/banners/family-fun.jpg)", "url(../img/banners/fantastic-restaurants.jpg)", "url(../img/banners/fun-adventures.jpg)", "url(../img/banners/luxury-golfing.jpg)"];
    (function recurse(counter) {
        var bgImage = arr[counter];
        if (firstTime == false) {
            $("#rotator").fadeOut("slow", function(){
                $('#rotator').css('background-image', bgImage);
            });
            $("#rotator").fadeIn("slow");
        } else {
            firstTime = false;
        }               
        delete arr[counter];
        arr.push(bgImage);
        setTimeout(function() {
            recurse(counter + 1);
        }, 7000);
    })(0); 
/* -------------------------------------------------------------------- */

});