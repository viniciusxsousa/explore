/*
    Solicite o nome do aluno e as 3 primeiras notas do bismestre. Calcular a média desse aluno. 

    Se o aluno passou no bimestre dá os parabéns.

    Se o aluno não passou, motivar o aluno para dar o seu melhor na prova de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota. 
*/

const studentName = prompt('Digite seu nome: ');

const note01 = Number(prompt('Digite sua primeira nota:'));
const note02 = Number(prompt('Digite sua segunda nota:'));
const note03 = Number(prompt('Digite sua terceira nota:'));

let average = (note01 + note02 + note03) / 3;
average = average.toFixed(2);

if(average > 7){
    alert(`Parabéns ${studentName}, sua média foi ${average} e você foi aprovado`);
} else {
    alert(`Poxa ${studentName}, infelizmente sua média foi ${average}. Mas não se preocupe, ainda há tempo para recuperar na prova de recuperação. Estude!`);
}