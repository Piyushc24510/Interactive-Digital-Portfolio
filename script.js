// Smooth Scrolling for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Highlight active section in navbar
const sections = document.querySelectorAll("section, .main-section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 60;
    if (pageYOffset >= secTop) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Contact Form Validation
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[placeholder='Full Name...']").value.trim();
    const email = form.querySelector("input[placeholder='Full Email Id...']").value.trim();
    const phone = form.querySelector("input[placeholder='Full Mobile No...']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !phone || !message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert("✅ Thank you, your message has been submitted!");
    form.reset();
  });
}

// Back to Top Button
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.fontSize = "18px";
backToTop.style.display = "none";
backToTop.style.background = "#ffbf35";
backToTop.style.color = "#000";
backToTop.style.border = "none";
backToTop.style.borderRadius = "5px";
backToTop.style.cursor = "pointer";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Optional: Dark/Light Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙";
toggleBtn.className = "theme-toggle";
document.body.appendChild(toggleBtn);

toggleBtn.style.position = "fixed";
toggleBtn.style.top = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "8px 12px";
toggleBtn.style.fontSize = "18px";
toggleBtn.style.borderRadius = "5px";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.innerText = "☀️";
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
  } else {
    toggleBtn.innerText = "🌙";
    document.body.style.background = "#000";
    document.body.style.color = "#fff";
  }
});
