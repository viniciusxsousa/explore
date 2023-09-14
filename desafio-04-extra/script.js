let students = [
    {name: 'Vinicius', noteOne: 8.5, noteTwo: 5},
    {name: 'Beatriz', noteOne: 10, noteTwo: 9},
    {name: 'Giovanna', noteOne: 7, noteTwo: 8}
]

function calcAverage(note1, note2) {
    return (note1 + note2)/2;
}

for(let student of students) {
    student.average = calcAverage(student.noteOne, student.noteTwo);
}

for(let student of students) {
    if(student.average >= 7) {
        alert(`
        Parabens ${student.name}!!
        Você foi aprovado com média ${student.average}
        `);
    } else {
        alert(`
        Poxa ${student.name}, não foi dessa vez.
        Você foi reprovado(a) com média ${student.average}
        `);
    }
}