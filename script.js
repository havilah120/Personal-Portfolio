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

// Button hover animation
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

// CONTACT FORM HANDLING
const form = document.querySelector("form");
const successMessage = document.createElement("p");

if (form) {
  successMessage.textContent = "Thank you! Your message has been sent successfully.";
  successMessage.style.color = "#28a745";
  successMessage.style.marginTop = "15px";
  successMessage.style.fontWeight = "500";
  successMessage.style.display = "none";

  form.appendChild(successMessage);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show success message
    successMessage.style.display = "block";

    // Clear form fields
    form.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  });
}

// Active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

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
