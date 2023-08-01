$(document).ready(function () {
    $('.toggle-style-switcher').click(function () {
        $('.style-switcher').toggleClass('open');
    });
});

const setActiveStyle = (colorName) => {
    $('.alternate-style').attr('disabled', true);
    $('.alternate-style[data-target=' + colorName + ']').removeAttr('disabled');
}