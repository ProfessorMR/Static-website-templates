$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            250: {
                items: 1
            }
        }
    });

    let hamburgerMenu = document.querySelector('.hamburger-menu');
    let navbarResponsive = document.querySelector('.navbar-responsive');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.close');
    let submenu = document.querySelectorAll('.submenu');

    hamburgerMenu.onclick = () => {
        navbarResponsive.classList.add('active');
        overlay.classList.add('active');
    }

    overlay.onclick = () => {
        removeMenu(navbarResponsive,overlay);

    }

    close.onclick = () => {
        removeMenu(navbarResponsive,overlay);
    }

    const removeMenu = (navbar,overlay) => {
        navbar.classList.remove('active');
        overlay.classList.remove('active');
    }

    submenu.forEach(item => {
        item.onclick = () => {
            let mega = item.nextElementSibling;
            item.classList.toggle('show-icon-view');
            mega.classList.toggle('show-megamenu');
        }
    });
});