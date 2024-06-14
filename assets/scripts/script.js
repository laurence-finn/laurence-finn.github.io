document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll("h2");
  
    headings.forEach(heading => {
      // Create a span for the icon
      const icon = document.createElement("span");
      icon.textContent = " + ";
      icon.style.cursor = "pointer";
      icon.style.marginRight = "0.5em";
      heading.prepend(icon);
  
      // Initially hide the content
      let content = heading.nextElementSibling;
      if (content) content.style.display = "none";
  
      // Toggle functionality
      heading.addEventListener("click", () => {
        if (content) {
          const isVisible = content.style.display === "block";
          content.style.display = isVisible ? "none" : "block";
          icon.textContent = isVisible ? " + " : " - ";
        }
      });
    });
  });