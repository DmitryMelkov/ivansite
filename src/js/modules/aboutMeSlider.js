import Swiper, { Navigation } from 'swiper';

export const aboutMeSlider = () => {
  const swiper = new Swiper('.about-me__slider', {
    modules: [Navigation],
    navigation: {
      nextEl: '.about-me__button-next',
      prevEl: '.about-me__button-prev',
    },
    spaceBetween: 20,
    slidesPerView: 4,
    slidesPerGroup: 1,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
};
