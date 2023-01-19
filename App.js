 var slideMenu = document.querySelector(".navbar__list");
    var closeButton = document.querySelector(".close_button");
    var openButton = document.querySelector(".hamburger-menu");


    function openMenu() {
        slideMenu.classList.add("active");
        closeButton.classList.add("active");
    }

    function closeMenu() {
        slideMenu.classList.remove("active");
        closeButton.classList.remove("active");
    }