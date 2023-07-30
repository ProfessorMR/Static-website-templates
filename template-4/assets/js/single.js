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