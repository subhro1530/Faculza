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

function subscribe() {
  // Get the email input value
  var email = document.getElementById('emailInput').value;

  // Make sure the email is not empty
  if (email.trim() !== '') {
      // Use AJAX to send the email to the server
      $.ajax({
          type: 'POST',
          url: 'store_email.php', // Adjust the path if needed
          data: { email: email },
          success: function (response) {
              // Handle the server response
              console.log(response);
              alert('Subscription successful!'); // You can replace this with a more user-friendly notification
          },
          error: function (error) {
              console.error('Error:', error);
              alert('Subscription failed. Please try again.'); // You can replace this with a more user-friendly notification
          }
      });
  } else {
      alert('Please enter a valid email address.');
  }
}
