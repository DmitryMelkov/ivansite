import Swiper, { Navigation } from "swiper";

export const reviewsSlider = () => {
  const swiper = new Swiper('.reviews__slider', {
    modules: [Navigation],
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
    spaceBetween: 20,
    slidesPerView: 3,
    slidesPerGroup: 1,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
}
