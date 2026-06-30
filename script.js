// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll + active section
const header = document.getElementById('site-header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = ['home','about','skills','services','portfolio','contact']
  .map(id => document.getElementById(id));
const scrollTopBtn = document.getElementById('scrollTop');

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 30);
  scrollTopBtn.classList.toggle('show', y > 600);
  const probe = y + 140;
  for (let i = sections.length - 1; i >= 0; i--) {
    const s = sections[i];
    if (s && s.offsetTop <= probe) {
      navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === s.id));
      break;
    }
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('.m-link').forEach(a =>
  a.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    mobileMenu.classList.remove('open');
  })
);

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('reveal-in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

emailjs.init({
    publicKey: "4kRXElIgiqg_JFLxh",
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = this;

    emailjs.sendForm(
        "service_mu1ettm",
        "template_ee5jzqa",
        form
    )
    .then(() => {
        document.getElementById("formStatus").textContent =
            "✅ Message sent successfully!";
        form.reset();
    })
    .catch((error) => {
    console.log("Status:", error.status);
    console.log("Text:", error.text);
    console.log(error);

    document.getElementById("formStatus").textContent = error.text;
});
});