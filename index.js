const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list a");

const animatedSections = [
    document.querySelector(".more_about"),
    document.querySelector(".technologies"),
    document.querySelector(".projects")
].filter(Boolean);

const sectionById = {
    "more_about": document.querySelector(".more_about"),
    "technologies_area": document.querySelector(".technologies"),
    "projects_area": document.querySelector(".projects")
};

// Toggle do menu hambúrguer
menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// Animação ao entrar na tela + reativar ao clicar no menu
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        navList.classList.remove("active");

        const href = link.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
            const id = href.slice(1);
            const section = sectionById[id];
            if (section) {
                e.preventDefault();
                section.classList.remove("in-view");
                section.offsetHeight; // força reflow
                requestAnimationFrame(() => {
                    section.classList.add("in-view");
                });
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });
});

// Intersection Observer: animação ao abrir a página / ao rolar até a seção
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    },
    { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
);

animatedSections.forEach((section) => observer.observe(section));
