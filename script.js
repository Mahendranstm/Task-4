const showButtons = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButtons = document.querySelector(".close-modal");

const openToggler = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeToggler = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

showButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    openToggler();
  });
});

closeButtons.addEventListener("click", () => {
  closeToggler();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeToggler();
  }
});

overlay.addEventListener("click", () => {
  closeToggler();
});
