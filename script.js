// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Optional: Button hover animation (subtle)
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

// Contact form feedback (no backend)
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I’ll get back to you soon.");
    form.reset();
  });
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


