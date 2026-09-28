const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");

// Mobile menu toggle
menuBtn.addEventListener("click", () => {
    nav.style.display =
        nav.style.display === "flex"
            ? "none"
            : "flex";
});


// Close mobile menu when navigation link is clicked
document.querySelectorAll("#navLinks a").forEach((link) => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 800) {
            nav.style.display = "none";
        }

    });

});


// Update footer year automatically
document.getElementById("year").textContent =
    new Date().getFullYear();
