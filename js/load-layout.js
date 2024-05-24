// File: load-layout.js
// Description: Load the reusable header from the server using the fetch API and insert the text into the header element.
document.addEventListener("DOMContentLoaded", function() {
    // Fetch is a built-in function that makes an HTTP request to the server for the header file.
    fetch('/_header.html') 
      // Response.text is returned as a "promise" which is a way to handle asynchronous code.
      // Each "then" function is a callback that occurs when the previous function is complete.
      .then(response => response.text()) 
      // Take the data from the response and insert it into the header element.
      .then(data => {
        document.querySelector('header').innerHTML = data; 

      });
  });