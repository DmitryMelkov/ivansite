export const setupModal = (openBtnId, closeBtnId, modalId) => {
  const openModalBtn = document.getElementById(openBtnId);
  const closeModalBtn = document.getElementById(closeBtnId);
  const modal = document.getElementById(modalId);

  openModalBtn.addEventListener('click', function () {
    modal.classList.add('show');
  });

  closeModalBtn.addEventListener('click', function () {
    modal.classList.remove('show');
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.classList.remove('show');
    }
  });
};