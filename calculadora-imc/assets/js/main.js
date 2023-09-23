const $formButton = document.querySelector('.main__form button');
const $inputWeight = document.querySelector('#peso');
const $inputHeight = document.querySelector('#altura');
const $modal = document.querySelector('.conteiner__modal');
const $txtModal = document.querySelector('.card__modal p');
const $btnClose = document.querySelector('.card__btn');

console.log($txtModal);


/* Lista de eventos */
$formButton.addEventListener('click', (e) => {
    e.preventDefault();
   
    const weight = Number($inputWeight.value);
    const height = Number($inputHeight.value);

    $modal.classList.add('open');
    $txtModal.innerText = `Seu IMC é de ${calcIMC(weight, height)}`;
})

$btnClose.addEventListener('click', () => {
    $modal.classList.remove('open');
})

/* Funções */

function calcIMC(weight, height) {
    let imc = weight / ((height / 100 )** 2);
    imc = imc.toFixed(2);
    return imc
}