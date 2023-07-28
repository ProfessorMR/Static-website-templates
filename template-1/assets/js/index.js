$(document).ready(function() {
    $('#hamburger-icon').click(function() {
        let responsiveMenu = $('#responsive-navigation');

        responsiveMenu.animate({
            right: 0
        },300);

        $('body').append('<div class="overlay-menu"></div>');

        $('.overlay-menu').click(function() {
            
            responsiveMenu.animate({
                right: -220
            },300);

            $(this).remove();
        });
    });
});