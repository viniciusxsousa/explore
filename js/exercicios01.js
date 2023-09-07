//Exercícios das primeiras aulas
//Variáveis e tipos de dados 

//1. Declare uma variável de nome weight.
let weight;

//2. Que tipo de dado é a variável acima ?
console.log(typeof weight);

//3. Declare uma variável e atribua valores para cada um dos dados:
/*
    name: string
    age: number (integer)
    stars: number (float)
    isSubscribed: boolean 
*/

let name = 'Vinicius Sousa';
let age = 24;
let stars = 102.5;
let isSubscribed = false;

/* 
    4. A variável student abaixo é de que tipo de dados ?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substiua <name> <age> e <weight> pelos valores de cada propriedade do objeto.

*/

let student = {
    name: 'Vinicius Sousa',
    age: 24,
    stars: 4.5,
    isSubscribed: false
};

console.log(typeof student);
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

//5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio.

let students = [];

//6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array).

students = [student]

//7. Coloque no console o valor da posição zero do array acima.
console.log(students[0]);

//8. Crie um novo student e coloque na posição 1 do array students

let student2 = {
    name: 'João Pires',
    age: 30,
    weight: 70,
    isSubscribed: true,
}

students[1] = student2;

console.log(students)

//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

/* 
    console.log(a);
    var a = 1;

    R: quando rodar o código a variável a será identificada, pois ela sofre o conceito de hoting. Ela é elevada de forma global, porém o valor não será interpretado, pois só a declaração que é elevada a atribuição continua na linha '74'.
*/

console.log(a);
var a = 1;