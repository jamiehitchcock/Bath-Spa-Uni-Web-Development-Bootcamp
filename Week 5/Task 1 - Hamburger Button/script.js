// apply variables to each dom element
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");

// function to toggle the menu
function toggleMenu() {
    // if the menu is appearing then hide it and change button to menuIcon
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else { 
        // otherwise show menu and change button to closeIcon
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

//   execute the toggleMenu function when the hamburger icons are clicked on
hamburger.addEventListener("click", toggleMenu);

// execute the toggleMenu function when an item is clicked on, to hide the menu
menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)