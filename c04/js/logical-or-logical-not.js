var nota1 = 8;
var nota2 = 8;
var passar1 = 6;
var passar2 = 6;

var passouMin = (nota1 >= passar1) || (nota2 >= passar2);

var msg = 'Repetição Necessária: ' + !passouMin;

var el = window.document.getElementById('answer');
el.textContent = msg;