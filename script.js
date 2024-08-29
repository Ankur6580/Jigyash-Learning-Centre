// JavaScript for handling sidebar toggle
document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('sidebar').style.width = '250px';
});

document.getElementById('closebtn').addEventListener('click', function () {
  document.getElementById('sidebar').style.width = '0';
});

// Close sidebar after clicking any link
document.querySelectorAll('#sidebar a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById('sidebar').style.width = '0';
  });
});

// script.js

const scriptURL = 'https://script.google.com/macros/s/AKfycbwL9hjfRBkcS7FwluNINejY9eKrJefWHRihr1QGyjc7dHvHPE7st3uK3F-4AeS9vd3L/exec';

const form = document.getElementById('registration-form');
const spinner = document.getElementById('loading-spinner');
const popup = document.getElementById('thank-you-popup');
const closePopupButton = document.getElementById('close-popup');

form.addEventListener('submit', e => {
    e.preventDefault();
    spinner.style.display = 'block'; // Show the spinner

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            spinner.style.display = 'none'; // Hide the spinner
            popup.style.display = 'block'; // Show the pop-up
        })
        .then(() => form.reset()) // Optionally reset the form after submission
        .catch(error => {
            spinner.style.display = 'none'; // Hide the spinner on error
            console.error('Error!', error.message);
        });
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the pop-up
});


// Function to show the alert for transaction ID note
// ----------------------------------------------------------------

// Function to show the pop-up card and disable scrolling
function showPopup() {
  const popupCard = document.getElementById('payment-popup-card');
  popupCard.style.display = 'flex'; // Display the pop-up
  document.body.classList.add('no-scroll'); // Disable scrolling on the body

  // Start the countdown
  startCountdown();
}

// Function to hide the pop-up card and re-enable scrolling
function hidePopup() {
  const popupCard = document.getElementById('payment-popup-card');
  popupCard.style.display = 'none'; // Hide the pop-up
  document.body.classList.remove('no-scroll'); // Re-enable scrolling on the body
}

// Function to start the countdown
function startCountdown() {
  let timeLeft = 10; // 10 seconds countdown
  const timerElement = document.getElementById('timer');
  const button = document.getElementById('close-payment-popup');

  const countdownInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;

      if (timeLeft <= 0) {
          clearInterval(countdownInterval); // Stop the countdown
          button.style.display = 'inline-block'; // Show the button
          document.getElementById('countdown').style.display = 'none'; // Hide the countdown text
      }
  }, 1000); // Update every second
}

// Function to check if the user has scrolled to the payment details section
function checkScroll() {
  const paymentSection = document.getElementById('payment-details');
  const rect = paymentSection.getBoundingClientRect();

  // Check if the payment details section is in view
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      showPopup();
      window.removeEventListener('scroll', checkScroll); // Remove the event listener after the alert
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', checkScroll);

// Close the pop-up when the user clicks the button and re-enable scrolling
document.getElementById('close-payment-popup').addEventListener('click', hidePopup);


