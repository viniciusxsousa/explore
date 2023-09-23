const $formButton = document.querySelector('.main__form button');
const $inputWeight = document.querySelector('#peso');
const $inputHeight = document.querySelector('#altura');

$formButton.addEventListener('click', (e) => {
    e.preventDefault();
   
    const weight = Number($inputWeight.value);
    const height = Number($inputHeight.value);

    console.log(calcIMC(weight, height));
})

function calcIMC(weight, height) {
    let imc = weight / (height ** 2);
    imc = imc.toFixed(2);
    return imc
}