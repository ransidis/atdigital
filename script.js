document.addEventListener('DOMContentLoaded', function () {
    // Toggle FAQ item content
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const heading = item.querySelector('h3');
        const content = item.querySelector('.faq-content');
        const toggleIcon = item.querySelector('.toggle-icon');

        heading.addEventListener('click', () => {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            toggleIcon.textContent = content.style.display === 'none' ? '+' : '-';
        });
    });

    // Toggle mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});
