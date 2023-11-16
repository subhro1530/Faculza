document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const sidebar = document.querySelector(".sidebar");

  if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", function () {
      sidebar.classList.toggle("show");
    });
  }

  // JavaScript for animating text in the hero section
  const heroContent = document.querySelector(".hero-content h1");

  function animateText() {
    const text = "Faculza: Simplifying Your SaaS Project's Success";
    let index = 0;

    function displayText() {
      heroContent.textContent = text.slice(0, index);
      index++;

      if (index > text.length) {
        clearInterval(animationInterval);
      }
    }

    const animationInterval = setInterval(displayText, 150);
  }

  if (heroContent) {
    animateText();
  }
});
