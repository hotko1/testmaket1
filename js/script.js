/**
 * @file
 * Slider, burger menu and like button behaviours.
 */

'use strict';

// Behavior for slick-slider.
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

// Behavior of the hamburger menu.
$(document).ready(function(){
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// Behaviours for the heart icons and counter in gallery.
function heart(x) {

    // Behaviour for the heart icons.
    x.classList.toggle("taken-with-ama__full-heart");

    // Behavior for the counter.
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