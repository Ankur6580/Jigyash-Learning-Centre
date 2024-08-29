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


const scriptURL = 'https://script.google.com/macros/s/AKfycbwL9hjfRBkcS7FwluNINejY9eKrJefWHRihr1QGyjc7dHvHPE7st3uK3F-4AeS9vd3L/exec';

const form = document.getElementById('registration-form');

form.addEventListener('submit', e => {
  e.preventDefault(); // Prevent default form submission
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
    .then(response => alert("Thank you! Your form has been submitted successfully."))
    .then(() => form.reset()) // Optionally reset the form after submission
    .catch(error => console.error('Error!', error.message));
});
