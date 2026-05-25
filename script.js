// Interactivity 1: Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Toggle Light Mode';
    } else {
        themeToggleBtn.textContent = 'Toggle Dark Mode';
    }
});

// Interactivity 2: Form submission handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;

    formMessage.style.color = 'green';
    formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;

    contactForm.reset();
});
