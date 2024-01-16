/// HAMBURGER MENU ///

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerCheckbox = document.querySelector(".hamburger input");
    const dropDownLinks = document.querySelector(".dropdown-links");
  
    hamburgerCheckbox.addEventListener("change", function() {
      if (this.checked) {
        dropDownLinks.style.display = "flex";
        dropDownLinks.style.flexDirection = "column";
        document.body.style.overflow = "hidden";
        dropDownLinks.classList.add("show");
      } else {
        dropDownLinks.style.display = "none";
        document.body.style.overflow = "auto";
        dropDownLinks.classList.remove("show");
      }
    });
});

/// END HAMBURGER MENU ///


/// CLOSING DROPDOWN MENU ///

function toggleDropdown(link) {
    var dropdownContent = link.querySelector('.dropdown-content');
    var chevron = link.querySelector('.fa-chevron-down');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    chevron.style.transform = (dropdownContent.style.display === 'block') ? 'rotate(180deg)' : 'rotate(0deg)';
}

document.addEventListener('click', function (event) {
    var dropdownLinks = document.querySelectorAll('.dropdown-link');
    dropdownLinks.forEach(function (link) {
        var dropdownContent = link.querySelector('.dropdown-content');
        var chevron = link.querySelector('.fa-chevron-down');
        if (!link.contains(event.target)) {
            dropdownContent.style.display = 'none';
            chevron.style.transform = 'rotate(0deg)';
        }
    });
});

/// END CLOSING DROPDOWN MENU ///