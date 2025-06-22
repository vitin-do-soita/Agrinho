// --- SCRIPT PARA CONTROLE DO MENU MOBILE ---

// Seleciona os elementos do DOM
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const icon = menuToggle.querySelector('i');

// Função para alternar a visibilidade do menu
function toggleMenu() {
    navLinks.classList.toggle('active');

    // Alterna o ícone entre 'menu' e 'fechar'
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        menuToggle.setAttribute('aria-expanded', 'true');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}

// Adiciona o evento de clique ao botão do menu
menuToggle.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar em um link (para uma melhor experiência de usuário)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});