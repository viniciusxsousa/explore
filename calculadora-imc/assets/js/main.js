import { Modal } from './modal.js';
import { alertError } from './erro-mensagem.js';
import { calcIMC, notNumber } from './utils.js';

const $formButton = document.querySelector('.main__form button');
const $inputWeight = document.querySelector('#peso');
const $inputHeight = document.querySelector('#altura');

/* Lista de eventos */
$formButton.addEventListener('click', (e) => {
    e.preventDefault();
   
    const weight = Number($inputWeight.value);
    const height = Number($inputHeight.value);

    const showErroMensagem = notNumber(weight) || notNumber(height);

    if(showErroMensagem) {
        alertError.open();
        return
    }

    alertError.close();
    
    Modal.mesagem.innerText = `Seu IMC é de ${calcIMC(weight, height)}`;
    Modal.open();
})