const slideA = document.querySelector('.pointerA');
const slideB = document.querySelector('.pointerB');
const slideC = document.querySelector('.pointerC');
const sliders = document.querySelector('.banner__sliders');

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
