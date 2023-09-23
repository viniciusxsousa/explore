const $formButton = document.querySelector('.main__form button');
const $inputWeight = document.querySelector('#peso');
const $inputHeight = document.querySelector('#altura');

$formButton.addEventListener('click', (e) => {
    e.preventDefault();
   
    const weight = $inputWeight.value;
    const height = $inputHeight.value;

    console.log(weight, height);
})