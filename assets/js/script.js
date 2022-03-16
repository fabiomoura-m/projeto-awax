const slideA = document.querySelector('.pointerA');
const slideB = document.querySelector('.pointerB');
const slideC = document.querySelector('.pointerC');
const sliders = document.querySelector('.banner__sliders');
const menu = document.querySelector('.header_menuOpener');
const btnScroll = document.querySelector('.scrollButton');

function changeLayoutA() {
  clean();
  slideA.classList.add('active');
}
function changeLayoutB() {
  clean();
  sliders.style.marginLeft = '-100vw';
  slideB.classList.add('active');
}
function changeLayoutC() {
  clean();
  sliders.style.marginLeft = '-200vw';
  slideC.classList.add('active');
}

function clean() {
  slideA.classList.remove('active');
  slideB.classList.remove('active');
  slideC.classList.remove('active');
  sliders.style.marginLeft = '0vw';
}
slideA.addEventListener('click', changeLayoutA);
slideB.addEventListener('click', changeLayoutB);
slideC.addEventListener('click', changeLayoutC);

// Função para abrir o menu lateral no tablet e mobile
function openMenu() {
  const headerNav = document.querySelector('.header__menuNavigation');
  console.log('clicou');
  headerNav.classList.toggle('openMobile');
}

menu.addEventListener('click', openMenu);

// Função para subir a tela
function upScreen() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

btnScroll.addEventListener('click', upScreen);

// Função que verifica para o botão do scroll aparecer apenas quando a posição do scroll em Y for acima de 500.
function toggleButtonScroll() {
  //Condição para realizar apenas se a tela tiver no mínimo 768px de largura.
  if (window.matchMedia('(min-width: 768px)').matches) {
    if (window.scrollY < 500) {
      // ocultar o botao
      document.querySelector('.scrollButton').style.display = 'none';
    } else {
      // mostrar o botao
      document.querySelector('.scrollButton').style.display = 'flex';
    }
  }
}

window.addEventListener('scroll', toggleButtonScroll);
