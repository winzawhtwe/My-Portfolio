let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo', {delay:200, origin: 'left'});
sr.reveal('.navbar', {delay:300, origin: 'top'});
sr.reveal('.menu-btn', {delay:400, origin: 'right'});

sr.reveal('.home-content', {delay:500, origin: 'botton'});
sr.reveal('.home-content h1', {delay:580, origin: 'left'});
sr.reveal('.home-content h3', {delay:650, origin: 'top'});
sr.reveal('.home-content p', {delay:750, origin: 'botton'});

sr.reveal('.btn-box', {delay:850, origin: 'right'});

sr.reveal('.home-sci', {delay:950, origin: 'top'});

sr.reveal('.home-img', {delay:1200, origin: 'right'});