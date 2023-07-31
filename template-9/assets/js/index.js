const tab = document.getElementById('tab').children;
const items = document.querySelector('.portfolio-gallery').children;

for(let li of tab){
    li.onclick = (e) =>{
        for(let j = 0; j < tab.length; j++){
            if(tab[j].classList.contains('active')){
                tab[j].classList.remove('active');
            }
        }
        e.target.classList.add('active');

        const tabTarget = e.target.getAttribute('data-target');

        for(let item of items){
            item.style.display = 'none';
            const itemTarget = item.getAttribute('data-id');

            if(tabTarget === 'all'){
                item.style.display = 'block';
            }
            else if(itemTarget === tabTarget){
                item.style.display = 'block';
            }
            
        }
    }
}

const lightbox = document.querySelector('.lightbox');
const closeLightbox = document.querySelector('.close-lightbox');
const imgLightbox = lightbox.querySelector('img');

closeLightbox.onclick = () => {
    lightbox.classList.remove('showLightbox');
}

lightbox.onclick = (e) => {
    if(e.target != imgLightbox){
        lightbox.classList.remove('showLightbox');
    }
}

for(let item of items){
    const view = item.querySelector('span');
    view.onclick = () => {
        const imgItem = item.children[0].querySelector('img');
        const srcItem = imgItem.src;

        imgLightbox.setAttribute('src',srcItem);
        lightbox.classList.add('showLightbox');
        
    }
}

const customerItems = document.querySelectorAll('.customer-item');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let index = 0;

left.onclick = () => {
    sliderCustomer('left');
}

right.onclick = () => {
    sliderCustomer('right');
}


const sliderCustomer = (dir) => {
    if(dir == 'left'){
        if(index == 0){
            index = customerItems.length - 1;
        }
        else{
            index--;
        }
    }   
    else if(dir == 'right'){
        if(index == customerItems.length - 1){
            index = 0;
        }
        else{
            index++;
        }
    }

    for(let item of customerItems){
        if(item.classList.contains('active-customer')){
            item.classList.remove('active-customer');
        }
    }  
    customerItems[index].classList.add('active-customer');
}

const header = document.getElementById('header');

window.onscroll = () => {
    let scrollTopFixed = document.documentElement.scrollTop;
    let heightHeader = header.offsetHeight;

    if(scrollTopFixed > heightHeader){
        header.classList.add('fixed-header');
    }
    else{
        header.classList.remove('fixed-header');
    }
}

const navbar = document.querySelector('.navbar ul').children;

for(let index = 0; index < navbar.length; index++) {
    navbar[index].onclick = () =>{
        for(let len = 0; len < navbar.length; len++) {
            if(navbar[len].children[0].classList.contains('active')){
                navbar[len].children[0].classList.remove('active');
            }
        }
        navbar[index].children[0].classList.add('active');
        navbarResponsive.classList.remove('showNavbar');
        hamburgerMenu.classList.remove('changeMenuIcon');
        body.classList.remove('activeOverflow');
    }
}; 

const navbarResponsive = document.querySelector('.navbar-responsive');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const body = document.querySelector('body');

hamburgerMenu.onclick = (e) => {
    navbarResponsive.classList.toggle('showNavbar');
    hamburgerMenu.classList.toggle('changeMenuIcon');
    body.classList.toggle('activeOverflow');
}