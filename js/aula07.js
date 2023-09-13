/*
    Faça um programa que tenha um menu e apresente a sequinte mensagem:

    Olá usuário! Digite o número da opção desejada. 

    1. Cadastrar um item na lista.
    2. Mostrar um item na lista.
    3. Sair do programa.

    O programa deverá capturar o número digitado e mostrar o seguinte cenário:

    Caso o usuário digite 1: ele poderá cadastrar um item na lista.
    Caso o usuário digite 2: ele poderá ver os itens cadastrados. 
        Se não houver itens mostrar uma mensagem.
    Caso o usuário digite 3: A aplicação deverá ser encerrada.
*/

let run = true;
let itens = [];

while(run) {

    let option = Number(prompt(`Olá usuário! Digite o número da opção desejada.
    
    
    1. Cadastrar um item na lista.
    2. Mostrar um item na lista.
    3. Sair`));

    if(option === 1) {
        let item = prompt('Informe o nome do item que deseja cadastrar:');

        itens.push(item);
    } else if (option === 2) {
        alert(itens);
    } else {
        alert('Muito obrigado, até a próxima.');
        run = false;
    }
}