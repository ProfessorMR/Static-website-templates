const counterUp = window.counterUp.default;

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target;
        if (entry.isIntersecting && ! el.classList.contains( 'is-visible' )) {
            counterUp( el, {
                duration: 2000,
                delay: 16,
            });
            el.classList.add('is-visible');
        }
	});
}

const IO = new IntersectionObserver( callback, { threshold: 1 })

const el = document.querySelectorAll('.counter')

for(let i = 0; i < el.length; i++) {
    IO.observe(el[i])
}

// hamburger menu

$(document).ready(function() {
    $('.hamburger-icon').click(function() {
        let responsiveNavigation = $('#responsive-navigation');

        responsiveNavigation.animate({
            top : '0'
        },300);

        $('body').append('<div class="back-container"></div>');
        $('body').addClass('active');

        $('.back-container').click(function() {
            responsiveNavigation.animate({
                top: '-200px'
            },300);
            $(this).remove();
            $('body').removeClass('active');
        });
    });
});

// hamburger menu