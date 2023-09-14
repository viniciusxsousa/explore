let numberOne = Number(prompt('Digite o primeiro número: '));
let numberTwo = Number(prompt('Digite o segundo número'));

let sum = numberOne + numberTwo;
let subtraction = numberOne - numberTwo;
let multiplication = numberOne * numberTwo;
let division = numberOne / numberTwo;
let restDivision = numberOne % numberTwo;

alert(`A soma dos dois números é ${sum}`);
alert(`A subtração dos dois números é ${subtraction}`);
alert(`A multiplicação dos dois números é ${multiplication}`);
alert(`A divisão dos dois números é ${division}`);
alert(`O resto da divisão dos dois números é ${restDivision}`);


if(oddEven(sum)) {
    alert(`A soma dos dois valores é par: ${sum}`);
} else {
    alert(`A soma dos dois valores é impar: ${sum}`);
}

if(numberOne === numberTwo) {
    alert('Os números digitados são iguais.');
} else {
    alert('Os números digitados são diferentes.');
}

function oddEven(number) {
    let isEven = number % 2 === 0;
    return isEven
}