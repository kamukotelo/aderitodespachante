// AACS - Despachante Oficial (Adérito Silva) - Cédula nº 04027
// Script de navegação suave e suporte
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
