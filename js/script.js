// ========================================
// MOBILE NAVIGATION
// ========================================

const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ========================================
// CLOSE MOBILE MENU AFTER CLICKING LINK
// ========================================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ========================================
// UPDATE FOOTER YEAR
// ========================================

const footerText = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footerText.textContent =
    `© ${currentYear} Neha Panguluri`;


// ========================================
// SIMPLE SCROLL REVEAL
// ========================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function (section) {

    observer.observe(section);

});