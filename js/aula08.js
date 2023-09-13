/*
    Crie uma lista de pacientes.

    Cada paciente deverá conter:
    nome
    peso 
    idade 
    altura

    Escreva uma lista contendo os nomes dos pacientes
*/

let patients = [
    {nome: 'Vinicius', peso: 61.5, idade: 24, altura: 1.38},
    {nome: 'João', peso: 80, idade: 35, altura: 1.50},
    {nome: 'Maria', peso: 58, idade: 19, altura: 1.30}
]

for(let patient of patients) {
    console.log(patient.nome);
}
