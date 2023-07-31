$(document).ready(function() {

    // lightbox for work

    const items = $('.work-item').length;
    let i = 0;

    $('.work-item-inner').click(function(){
        let index = $(this).parent('.work-item').index();

        $('.lightbox').addClass('open');
        lightBoxSlideShow(index);
    }); 

    $('.controls .next').click(function(){
        if(i == items - 1){
            i = 0;
        }
        else{
            i++;
        }
        lightBoxSlideShow(i);
    });

    $('.controls .prev').click(function(){
        if(i == 0){
            i = items - 1;
        }
        else{
            i--;
        }
        lightBoxSlideShow(i);
    });

    $('.img-close').click(function(){
        $('.lightbox').removeClass('open');
    });

    $('.lightbox').click(function(e){
        if($(e.target).hasClass('lightbox')){
            $(this).removeClass('open');
        }
    });

    const lightBoxSlideShow = (index) => {
        const imgSrc = `images/works/large/${index + 1}.jpg`;
        const category = $('.work-item').eq(index).find('p').html();
        const allBoxes = $('.work-item').length;
        
        $('.lightbox-img img').attr('src',imgSrc);
        $('.lightbox-img img').attr('alt',`large-${index + 1}`);
        $('.lightbox-category h6').html(category);
        $('.lightbox-counter').html(`${allBoxes}/${index + 1}`);
    }

    // lightbox for work

    // responsive menu

    $('.sidenav').sidenav({
        edge: 'right'
    });

    // responsive menu

});