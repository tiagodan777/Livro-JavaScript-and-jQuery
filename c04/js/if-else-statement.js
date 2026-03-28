var nota = 75;
var passar = 50;
var msg;

if (nota >= passar) {
    msg = 'Parabéns, passas-te no teste!';
} else {
    msg = 'Ups! Tenta outra vez';
}

var el = window.document.getElementById('answer');
el.textContent = msg;