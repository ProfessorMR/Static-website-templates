const slides = document.querySelector('.slider-item').children;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slideLength = slides.length;
let index = 0;
let timeDuration = 5000;

next.onclick = () => {
    slideFunc('next');
}

prev.onclick = () => {
    slideFunc('prev');
}

const slideFunc = (dir) => {
    progress();
    if(dir == 'next'){
        if(index == slideLength - 1){
            index = 0;
        }
        else{
            index++;
        }
    }
    else{
        if(index == 0){
            index = slideLength - 1;
        }
        else{
            index--;
        }
    }

    clearInterval(timer);
    timer = setInterval(autoSlide, timeDuration);

    for(let item of slides){
        if(item.hasChildNodes('active')){
            item.classList.remove('active');
        }
    }

    slides[index].classList.add('active');
}

const progress = () =>{
    const progress = document.querySelector('.progress');
    progress.innerHTML = "";
    const div = document.createElement('div');
    
    div.style.width = "0";
    div.style.height = "4px";
    div.style.backgroundColor = "#c00";
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.left = "0";
    div.style.animation = `progress-bar ${timeDuration}ms linear`;

    progress.appendChild(div);
}

const autoSlide = () =>{
    slideFunc('next');
}

let timer = setInterval(autoSlide,timeDuration);

progress();

const searchClick = document.getElementById('search');
const search = document.querySelector('.search');

searchClick.onclick = () => {
    search.classList.toggle('show');
}

const dropDown = document.getElementById('mega-menu');
const megaMenu = document.querySelector('.mega-menu');
const navbarList = document.querySelector('#navbar-list');
const closeIcon = document.querySelector('.close');
const hamburgerMenu = document.querySelector('.hamburger-menu');

dropDown.onclick = () => {
    megaMenu.classList.toggle('fade');
}

closeIcon.onclick = () => {
    navbarList.classList.add('hidden');
}

hamburgerMenu.onclick = () => {
    navbarList.classList.remove('hidden');
}