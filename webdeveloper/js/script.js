const gamburger = document.querySelector('.gamburger'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu__close');

gamburger.addEventListener('click', () => {
    menu.classList.add('active');
});  
    
menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      linesCounter = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    linesCounter[i].style.width = item.innerHTML;
});   