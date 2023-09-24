export const Modal = {
    box: document.querySelector('.conteiner__modal'),
    mesagem: document.querySelector('.card__modal p'),
    buttonClose: document.querySelector('.card__btn'),

    open()  {
        Modal.box.classList.add('open');
    }, 
    close() {
        Modal.box.classList.remove('open');
    }
}

Modal.buttonClose.addEventListener('click', () => {
    Modal.close();
})