
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modil-bnt-open]"),
      closeModalBtn: document.querySelector("[data-modil-bnt-close]"),
      modal: document.querySelector("[data-modil-bnt]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();