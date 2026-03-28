var nota1 = 8;
var nota2 = 7;
var passar1 = 6;
var passar2 = 6;

var passouOs2 = (nota1 >= passar1) && (nota2 >= passar2);

var msg = 'Passas-te em ambos os testes: ' + passouOs2;

var el = window.document.getElementById('answer');
el.textContent = msg;