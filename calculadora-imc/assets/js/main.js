const $formButton = document.querySelector('.main__form button');
const $inputWeight = document.querySelector('#peso');
const $inputHeight = document.querySelector('#altura');

const Modal = {
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

/* Lista de eventos */
$formButton.addEventListener('click', (e) => {
    e.preventDefault();
   
    const weight = Number($inputWeight.value);
    const height = Number($inputHeight.value);

    
    Modal.mesagem.innerText = `Seu IMC é de ${calcIMC(weight, height)}`;
    Modal.open();
})

Modal.buttonClose.addEventListener('click', () => {
    Modal.close();
})

/* Funções */

function calcIMC(weight, height) {
    let imc = weight / ((height / 100 )** 2);
    imc = imc.toFixed(2);
    return imc
}