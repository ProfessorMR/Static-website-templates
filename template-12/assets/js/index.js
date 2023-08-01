$(document).ready(function () {
    $('#owl-product').owlCarousel({
        loop: true,
        nav: true,
        rtl: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    
    $('#owl-testimonial').owlCarousel({
        loop: true,
        nav: true,
        rtl: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 15,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            },
        }
    });

    $('body').scrollspy({
        target: '.navbar-nav'
    })
});
