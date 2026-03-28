var nota = 75;
var msg;

if (nota >= 50) {
    msg = 'Parabéns! ';
    msg += 'Podes continuar para a próxima ronda';
}

var el = window.document.getElementById('answer');
el.textContent = msg;