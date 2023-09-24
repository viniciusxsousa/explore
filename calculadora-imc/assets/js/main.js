import { Modal } from './modal.js';

const $formButton = document.querySelector('.main__form button');
const $inputWeight = document.querySelector('#peso');
const $inputHeight = document.querySelector('#altura');

/* Lista de eventos */
$formButton.addEventListener('click', (e) => {
    e.preventDefault();
   
    const weight = Number($inputWeight.value);
    const height = Number($inputHeight.value);

    
    Modal.mesagem.innerText = `Seu IMC é de ${calcIMC(weight, height)}`;
    Modal.open();
})

/* Funções */
function calcIMC(weight, height) {
    let imc = weight / ((height / 100 )** 2);
    imc = imc.toFixed(2);
    return imc
}