// Navegação estilo Netflix
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const page = item.dataset.page;
        showPage(page);
    });
});

function showPage(pageName) {
    // Esconde todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Mostra página selecionada
    document.getElementById(pageName).classList.remove('hidden');
    
    // Scroll suave
    document.body.style.overflow = 'auto';
}

function showHome() {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.body.style.overflow = 'auto';
}

// Animação de entrada
window.addEventListener('load', () => {
    document.querySelector('.netflix-grid').style.opacity = '0';
    document.querySelector('.netflix-grid').style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        document.querySelector('.netflix-grid').style.transition = 'all 0.8s ease';
        document.querySelector('.netflix-grid').style.opacity = '1';
        document.querySelector('.netflix-grid').style.transform = 'translateY(0)';
    }, 500);
});
