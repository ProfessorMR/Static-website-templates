$(document).ready(function() {

    //auto type

    let typed = new Typed('#typed',{
        strings: [
            'با برترین مهندسین',
            'یعنی بروزترین ابزار ها',
            'تضمین صد در صدی کار'
        ],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true,
    });

    //auto type

    // services

    $('.tab-button').on('click','li',function(){
        let tabMenu = $(this).attr('id');
        
        $(this).addClass('active').siblings().removeClass('active');
        $('#' + tabMenu + '-content').addClass('active').siblings().removeClass('active');
    });

    // services

    // project

    $('#lightSlider').lightSlider({
        rtl: true,
        item: 4,
        loop: true,
        pager: false,
        auto: true,
        pause: 3000,
        enableTouch: false,
        enableDrag: false,
        responsive : [
            {
                breakpoint: 992,
                settings: {
                    item : 3,
                    slideMargin: 10,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    item : 2,
                    slideMargin: 10,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    item : 1,
                }
            }
        ]
    });

    // project

    // toggle menu

    const toggleMenu = document.querySelector('.toggle-menu');
    const list = document.querySelector('nav ul');
    const body = document.querySelector('body');

    toggleMenu.onclick = () => {
        list.classList.toggle('active');
        toggleMenu.classList.toggle('activeBtn');
        body.classList.toggle('activeOverflow');
    }

    // toggle menu

});