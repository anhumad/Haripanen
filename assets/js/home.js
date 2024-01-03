document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time
    setTimeout(function() {
        // Hide splash screen
        document.getElementById("homepertama").style.display = "none";
        // Show login page
        document.getElementById("homekedua").style.display = "flex";
    }, 3000); // Adjust the time delay (in milliseconds) as needed
  });