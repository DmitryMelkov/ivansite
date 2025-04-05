export function initFormHandler(formId) {
  const contactForm = document.getElementById(formId);

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const data = {};

      formData.forEach((value, key) => {
        data[key] = value;
      });

      console.log(data);
    });
  } else {
    console.error(`Form with id ${formId} not found.`);
  }
}
