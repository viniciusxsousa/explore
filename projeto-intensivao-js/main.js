//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
console.log('Hello World!');

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = 2;
let numberTwo = 3;

console.log(`A soma de ${numberOne} + ${numberTwo} é ${numberOne + numberTwo}`);

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let dado = 2;

let isNumber = typeof dado === 'number';

const mensagem = isNumber ? 'É um número' : 'Não é um número';

console.log(mensagem);

//4.Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let text = 'bom de maizeee!';
const isString = typeof text === 'string';
const msg = isString ? 'É um string' : 'Não é uma string';

console.log(msg);

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let boo = true;
const isBoolean = typeof boo === 'boolean';
const msg2 = isBoolean ? 'É um boolean' : 'Não é um boolean';

console.log(msg2);

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas. 
let n1 = 8;
let n2 = 3;

console.log(`A subtração de ${n1} - ${n2} é ${n1 - n2}`);

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let m1 = 5;
let m2 = 3;

console.log(`A multiplicação de ${m1} * ${m2} é ${m1 * m2}`);

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let d1 = 8;
let d2 = 2;

console.log(`A divisão de ${d1} / ${d2} é ${d1/d2}`);

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let evenOrOdd = 0;
const isEven = evenOrOdd % 2 === 0;
const mensg = isEven ? 'É um número par' : 'Não é um número par';
console.log(mensg);

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let odd = 9;
const isOdd = odd % 2 !== 0;
const mens = isOdd ? 'É um número ímpar' : 'Não é um número impar';
console.log(mens);