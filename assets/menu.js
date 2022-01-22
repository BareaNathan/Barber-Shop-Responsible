const botaoMenu = document.querySelector('.cabecalho_menu');
const menu = document.querySelector('.menu');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu--ativo');
    botaoMenu.classList.toggle('cabecalho_menu--ativo')
})