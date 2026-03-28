var notas = [24, 32, 17];
var tamanhoNotas = notas.length
var rondaCount = 0;
var msg = '';
var i;

for (i = 0; i < tamanhoNotas; i++) {
    rondaCount++;
    msg += 'Ronda ' + rondaCount + ': ';
    msg += notas[i] + '<br>';
}

document.getElementById('answer').innerHTML = msg;