
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modile-menu-open]"),
      closeModalBtn: document.querySelector("[data-modile-menu-close]"),
      modal: document.querySelector("[data-modile-menu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();