$(document).ready(function () {
    "use strict";
    $('.slogan-owl-carousel').owlCarousel({
        rtl: false,
        loop: true,
        margin: 10,
        /*dots: true,*/
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:2000,
        responsiveClass: true,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true,
                dots: false
            },
            992: {
                items: 1,
                nav: false,
                loop: true,
                dots: true
            },
            1200: {
                items: 1,
                nav: false,
                loop: true,
                dots: true
            }
        }
    });

    $('.articles-owl-carousel').owlCarousel({
        rtl: false,
        loop:true,
        margin:10,
        responsiveClass:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            600:{
                items:2,
                nav:true,
                loop:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })

    $('.related-articles-owl-carousel').owlCarousel({
        rtl: false,
        loop:true,
        margin:10,
        responsiveClass:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            600:{
                items:2,
                nav:true,
                loop:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })
    
});