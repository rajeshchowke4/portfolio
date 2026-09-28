// =========================
// MOBILE NAVIGATION
// =========================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");


// Open / close mobile menu
menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});


// Close menu when navigation link is clicked
document
    .querySelectorAll("#navLinks a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

        });

    });


// Close menu if window becomes desktop size
window.addEventListener("resize", () => {

    if (window.innerWidth > 800) {

        nav.classList.remove("open");

    }

});


// =========================
// CURRENT YEAR
// =========================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}
