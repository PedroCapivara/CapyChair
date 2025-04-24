document.addEventListener("DOMContentLoaded", () => {
  const detalhes = document.querySelectorAll("details");

  detalhes.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        detail.classList.add("expandido");
      } else {
        detail.classList.remove("expandido");
      }
    });
  });
});
