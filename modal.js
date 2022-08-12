const abrirModal = document.querySelector('.lista-cta');
const modal = document.querySelector('.modal');
const cerrarModal = document.querySelector('.modal__close');

abrirModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

cerrarModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});