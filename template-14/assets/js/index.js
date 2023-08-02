let sidebar = document.querySelector('.sidebar');
let hamber = document.querySelector('.hamber-icon');
let overlay = document.querySelector('.overlay');

hamber.onclick = function () {
    sidebar.classList.toggle('active-sidebar');
    overlay.classList.toggle('active-overlay');
}

overlay.onclick = function () {
    sidebar.classList.remove('active-sidebar');
    overlay.classList.remove('active-overlay');
}