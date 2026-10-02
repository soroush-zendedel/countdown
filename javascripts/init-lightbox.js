document.addEventListener("DOMContentLoaded", function () {
  if (typeof GLightbox !== "undefined") {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: false,
    });
  }
});
