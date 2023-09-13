/*
    Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima.

    "Paciente x possui o IMC de Y"

    Onde x é o nome do paciente e y é o imc desse paciente.

    Crie uma função para fazer o cálculo IMC.
*/

let patients = [
    {nome: 'Vinicius', idade: 24, peso: 61.5, altura: 1.68},
    {nome: 'João', idade: 35, peso: 80, altura: 1.60},
    {nome: 'Maria', idade: 20, peso: 58, altura: 1.50}
]

function calcIMC(altura, peso) {
    return peso / (altura ** 2);
}

for(let patient of patients) {
    let imcPatient = calcIMC(patient.altura, patient.peso);
    imcPatient = imcPatient.toFixed(2);

    console.log(`O paciente ${patient.nome}, possui o IMC de ${imcPatient}`);
}