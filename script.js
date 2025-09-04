// Scroll suave
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const id = this.getAttribute("href").substring(1);
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      document.getElementById("nav-links").classList.remove("active"); // fecha menu no mobile
    });
  });
  
  // Menu responsivo
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  
  // Formulário
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
  });

  // Scroll suave (já existe no seu script)

// Menu responsivo (já existe no seu script)

// Formulário (já existe no seu script)

// Animação de descida ao rolar
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100; // distância para começar a aparecer

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active"); // se quiser sumir de novo, mantenha essa linha
    }
  }
}

window.addEventListener("scroll", revealOnScroll);

// Rodar 1 vez ao carregar
revealOnScroll();
