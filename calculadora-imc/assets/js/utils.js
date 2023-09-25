export function calcIMC(weight, height) {
    let imc = weight / ((height / 100 )** 2);
    imc = imc.toFixed(2);
    return imc
}

export function notNumber (value) {
    return isNaN(value) || value == '';
}