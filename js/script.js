'use strict';

$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        easing:'ease',
        autoplay:true,
        autoplaySpeed:3000,
        waitForAnimate:false,
    });
});

$(document).ready(function(){
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

function heart(x) {
    x.classList.toggle("taken-with-ama__full-heart");
    const i = x.id.slice(-1);
    const idCounter = "counter-" + i;
    const textCounter = document.getElementById(idCounter).textContent;
    if (x.classList.contains('taken-with-ama__full-heart')) {
        var numCounter = +textCounter + 1;
    } else {
        var numCounter = +textCounter - 1;
    }
    const newCounter = "#counter-" + i;
    $(newCounter).text(numCounter);
}