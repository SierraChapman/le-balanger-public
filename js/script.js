window.addEventListener("load", () => {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownMenu = document.querySelector(".header-secondary");

  dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
    dropdownBtn.classList.toggle("active");
  });
});