// Menu Mobile Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Estilo simples para mostrar o menu no mobile se necessário
    if(navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
    } else {
        navLinks.style.display = 'none';
    }
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        // Fecha menu mobile ao clicar
        if(window.innerWidth < 768) {
            navLinks.classList.remove('active');
            navLinks.style.display = 'none';
        }
    });
});

// Animação Reveal ao Rolar
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);
reveal(); // Gatilho inicial

// Simulação de envio de formulário
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado, Gabriel entrará em contato em breve!');
    e.target.reset();
});