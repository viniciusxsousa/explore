/*
    Captura 10 itens para compor a lista de um supermecado.

    Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let shoppList = [];

for(let i = 1; i <= 10; i++){
    let item = prompt('Digite o nome do produto:');

    shoppList.push(item);
}

let list = shoppList.join(', ');

alert('Sua lista de comprar é: ' + list);