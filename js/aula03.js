/*
    Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e restp da divisão.

*/

let number1 = Number(prompt('Digite o primeiro número: '));
let number2 = Number(prompt('Digite o segundo número: '));

let sum = number1 + number2;
let subtraction = number1 - number2;
let Multiplication = number1 * number2;
let division = number1 / number2;
let restDivision = number1 % number2;

alert(`Os números ${number1} e ${number2}
    A soma é: ${sum}
    A subtração é: ${subtraction}
    A multiplicação: ${Multiplication}
    A divisão é: ${division}
    E o resto da divisão é: ${restDivision}
`)