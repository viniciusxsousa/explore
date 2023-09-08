// Manipulando Array

let techs = ['html', 'css', 'js'];

//1° Adicionar um item no fim do array.
techs.push('react');
console.log(techs);

//2° Adicionar um item ao começo.
techs.unshift('react native');
console.log(techs)

//3° Remover um item do fim.
techs.pop()
console.log(techs);

//4° Remover um item do começo.
techs.shift();
console.log(techs);

//5° Pegar somente alguns elementos do array.
console.log(techs.slice(1, 3))

//6° Remoever um ou mais itens em qualquer posição do array
techs.splice(1, 1);
console.log(techs);

//7° Encontrar a posição de um elemento no array.
console.log(techs.findIndex((element) => {
    if(element === 'css') {
        return element
    }
} ));