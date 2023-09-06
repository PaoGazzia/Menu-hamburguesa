document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Obtener todos los elementos de la lista
    const menuItems = document.querySelectorAll(".nav-menu li");

    // Agregar un evento de clic a cada elemento de la lista
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
            navMenu.classList.remove("active"); // Cierra el menú al hacer clic en un elemento de la lista
        });
    });
});