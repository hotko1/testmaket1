/**
 * @file
 * Slider, burger menu, like button and menu behaviours.
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

    // Delete class active and class lock after clicking a menu item.
    $('a[href*="#"]').click(function(ev) {

        const unactiveBurger = document.querySelector('.header-burger');
        const unactiveMenu = document.querySelector('.header-menu');

        unactiveBurger.classList.remove('active');
        unactiveMenu.classList.remove('active');

        const unlock = document.querySelector('body');

        unlock.classList.remove('lock');
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

// Scrolling behavior after clicking a menu item.
document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})