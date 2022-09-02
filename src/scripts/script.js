/* const swiper = new Swiper('.prod-slider', {
    loop: false,
    slidesPerView: 1,
    navigation: {
        nextEl: '.prod-slider__next',
        prevEl: '.prod-slider__prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
}); */

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu__btn');

burger?.addEventListener('click', ()=>{
  mobileMenu.classList.add('open');
})
mobileMenuClose?.addEventListener('click', ()=>{
  mobileMenu.classList.remove('open');
})
