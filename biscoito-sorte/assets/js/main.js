const $cookie = document.querySelector('.screen1__img');
const $screenOne = document.querySelector('.screen1');
const $screenTwo = document.querySelector('.screen2');
const $btn = document.querySelector('.screen2__btn');
const $text = document.querySelector('.screen2__text');

const phrases = [
    'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
    'Acredite em si mesmo, e tudo é possível.',
    'Se você quer algo que nunca teve, precisa fazer algo que nunca fez.',
    'A jornada de mil milhas começa com um único passo.',
    'O fracasso é apenas uma oportunidade para recomeçar de forma mais inteligente.',
    'Quando você acredita, tudo é possível.',
    'A persistência é o segredo do sucesso.',
    'Não importa o quão devagar você vá, desde que não pare.',
    'O que você faz hoje pode melhorar todos os seus amanhãs.',
    'Lembre-se de que a única limitação que você tem é aquela que você impõe a si mesmo.'
];

$cookie.addEventListener('click', toggleScreen);
$btn.addEventListener('click', toggleScreen);



function toggleScreen() {
    $screenOne.classList.toggle('hide');
    $screenTwo.classList.toggle('hide');

    $text.innerText = drawPhrase(phrases);
}

function drawPhrase(phrases) {
    let numberDraw = Number((Math.random() * 10).toFixed(0));
    return phrases[numberDraw];
}