document.addEventListener("DOMContentLoaded", function() {
    fetch('/_header.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('header').innerHTML = data;
      });
  });