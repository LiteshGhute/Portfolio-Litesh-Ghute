// Navbar: shrink on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 40
        ? '0 8px 32px rgba(0,0,0,0.5)'
        : 'none';
});

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

function closeMobile() {
    mobileMenu.classList.remove('open');
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(
    '.about-card, .skill-card, .project-card, .edu-card, .contact-item, .section-title, .section-label, .section-subtitle'
).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// Stagger children in grids
document.querySelectorAll('.about-cards, .skills-grid, .projects-grid').forEach(grid => {
    Array.from(grid.children).forEach((child, i) => {
        child.style.transitionDelay = `${i * 80}ms`;
    });
});

// Contact form
function handleSubmit(e) {
    e.preventDefault();
    alert(
        "Thank you for your message!\n\n" +
        "Responses from this form are not currently monitored.\n" +
        "Please reach out via LinkedIn or GitHub for a faster reply."
    );
}
