/* JOGO DA ADIVINHAÇÃOq

Apresentar uma mensagem ao usuário:
"Adivinhe o número que estou pensando ? Este número está entre 0 e 10."

Crie uma lógica para gerar um número aleatório, verifique se o número digitado é o mesmo que o sorteado.

Enquanto o usuário não adivinha o número, mostrar a mensagem:
"Erro, tente novamente: "

Caso o usuário acerte o número apresente a mensagem: 
"Parabens! Você acertou o número em x tentativas".
*/

let number = Number(prompt('Adivinhe o número que estou pensando entre 0 e 10: '));

let randomNumber = (Math.floor(Math.random() * 11));

console.log(randomNumber);

let win = number === randomNumber;
let cont = 1;

while(!win) {
    number = Number(prompt('Vish, errou! Tente novamente:'));

    win = number === randomNumber;

    cont++;
}

if(win) {
    alert(`Parabens! Você acertou com ${cont} tentativas`);
}