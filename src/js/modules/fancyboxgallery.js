import { Fancybox } from '@fancyapps/ui';

export const initFancybox = () => {
  // Общие настройки для всех галерей
  const commonOptions = {
    Thumbs: false,
    Toolbar: false,
    closeButton: 'top',
    Image: {
      zoom: false,
    },
    mainClass: 'custom-fancybox'
  };

  //Инициализация для галереи сертификатов (секция about-me)
  Fancybox.bind('[data-fancybox="certificates"]', {
    ...commonOptions,
    on: {
      reveal: (fancybox) => {
        console.log('Открыта галерея сертификатов');
      }
    }
  });

  // Инициализация для галерей в модальных окнах кейсов
  Fancybox.bind('[data-fancybox^="case-"]', {
    ...commonOptions,
    on: {
      reveal: (fancybox, slide) => {
        // Находим родительскую модалку
        const modal = slide.triggerEl.closest('.cases-modal');
        if (modal) {
          fancybox.container.style.zIndex = '99999';
        }
      }
    }
  });
};