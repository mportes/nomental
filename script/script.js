const botao = document.getElementById('botao');

function toggleMenu() {
    const menu = document.getElementsByClassName('menu')[0];
    menu.classList.toggle('active');
}

botao.addEventListener('click', toggleMenu);