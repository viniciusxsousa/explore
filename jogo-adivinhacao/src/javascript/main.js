const $mensageClosed = document.querySelector('.main__closed');
const $inputNumber = document.querySelector('.main_attempts');
const $screenOne = document.querySelector('.screen1');
const $screenTwo = document.querySelector('.screen2');

let numberPlayer = null;
let attempts = 1;

let numberDrawn =  Number((Math.random() * 10).toFixed(0));

function attempt() {
    numberPlayer = Number($inputNumber.value);

    if(numberDrawn === numberPlayer) {
        $screenOne.classList.add('hide');
        $screenTwo.classList.remove('hide');

        $mensageClosed.innerText = `Você acertou em ${attempts} tentativas`;
    }

    attempts++;
}

function restart() {
    attempts = 1;
    numberDrawn = Number((Math.random() * 10).toFixed(0));

    $screenTwo.classList.add('hide');
    $screenOne.classList.remove('hide');
}