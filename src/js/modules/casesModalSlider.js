import Swiper, { Navigation, Pagination } from "swiper";

export const casesModalSlider = (sliderElement, modalContent) => {
  if (!sliderElement.swiper) {
    new Swiper(sliderElement, {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: modalContent.querySelector('.cases-modal__button-next'),
        prevEl: modalContent.querySelector('.cases-modal__button-prev'),
      },
      pagination: {
        el: modalContent.querySelector('.cases-modal__pagination'),
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
    });
  }
};