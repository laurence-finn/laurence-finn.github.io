// File: load-layout.js
// Description: Load the reusable header from the server using the fetch API and insert the text into the header element.
document.addEventListener("DOMContentLoaded", function() {
    // Fetch is a built-in function that makes an HTTP request to the server for the header file.
    fetch('/_header.html') 
      // Response.text is returned as a "promise" which is a way to handle asynchronous code.
      .then(response => response.text()) 
        //data => is a lambda function that takes the data returned from the server 
        //and inserts it into the header element.
      .then(data => {
        document.querySelector('header').innerHTML = data; 

      });
  });