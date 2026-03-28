var nota1 = 90;
var nota2 = 95;
var recorde1 = 75;
var recorde2 = 95;

var comparacao = (nota1 + nota2) >= (recorde1 + recorde2);

var el = window.document.getElementById('answer');
el.textContent = 'Novo recorde: ' + comparacao;