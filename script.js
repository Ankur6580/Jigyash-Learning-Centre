// JavaScript for handling sidebar toggle
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('sidebar').style.width = '250px';
});

document.getElementById('closebtn').addEventListener('click', function() {
  document.getElementById('sidebar').style.width = '0';
});

// Close sidebar after clicking any link
document.querySelectorAll('#sidebar a').forEach(function(link) {
  link.addEventListener('click', function() {
      document.getElementById('sidebar').style.width = '0';
  });
});
