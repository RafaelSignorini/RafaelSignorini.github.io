// Site de História - Ditadura Militar
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("drawer");
    var menu = document.querySelector(".menu");
  
    button.addEventListener("click", function() {
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
      } else {
        menu.classList.add("open");
      }
    });
  });