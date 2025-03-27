document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle menu kapag pinindot ang hamburger icon
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // HUWAG nang idagdag ang auto-close function sa links
});


