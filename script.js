const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");

// Mobile menu toggle
menuBtn.addEventListener("click", () => {
    nav.style.display =
        nav.style.display === "flex" ? "none" : "flex";
});

// Close mobile menu when a navigation link is clicked
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
        if (innerWidth <= 800) {
            nav.style.display = "none";
        }
    });
});

// Set current year in footer
document.getElementById("year").textContent =
    new Date().getFullYear();
