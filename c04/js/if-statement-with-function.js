var nota = 75;
var msg;

function darParabens() {
    msg = 'Parabéns! ';
}

if (nota >= 50) {
    darParabens();
    msg += 'Podes continuar para a próxima ronda'
}

var el = window.document.getElementById('answer');
el.textContent = msg;