let menuBtn = document.querySelector('.mobile');
let navMenu = document.querySelector('.nav-menu');
let lists = navMenu.children;

menuBtn.onclick = () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
}

for (let i = 0; i < lists.length; i++) {
    lists[i].onclick = () => {
        navMenu.classList.toggle('active');
        console.log(lists[i]);
    }
}