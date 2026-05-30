document.addEventListener('DOMContentLoaded', () => {
  // Menu Mobile
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('#menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
  // Lógica dos Desafios - Baseada na ordem
  /*const messages = [
   "Incrível! Menos plástico no oceano começa com a sua atitude hoje! 🌱",
   "Excelente! Cada gota economizada garante o futuro das próximas gerações! 💧",
   "Brilhante! Pequenas economias de energia geram um grande impacto positivo! 💡",
   "Fantástico! Equipamentos fora da tomada economizam energia e protegem o planeta! 🔌",
   "Sensacional! A separação correta é o coração da reciclagem. Você faz a diferença! ♻️",
   "Maravilhoso! Transformar resíduos em vida é o ciclo perfeito da natureza! 🌿"
  ];
*/
  const challengeButtons = document.querySelectorAll('.btn-challenge');

  challengeButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Marcar como aceito
      btn.textContent = 'Desafio Aceito! ✓';
      btn.style.backgroundColor = '#2e7d32';
      btn.disabled = true;

      const card = btn.closest('.challenge-card');
      if (card) card.style.borderColor = '#4caf50';

      // Mostrar mensagem baseada na posição do botão
      if (messages[index]) {
        alert(messages[index]);
      } else {
        alert("Parabéns por aceitar o desafio! 🌱");
      }
    });
  });
});




