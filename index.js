const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list a");

// Toggle do menu hambúrguer
menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("active");
    });
});
