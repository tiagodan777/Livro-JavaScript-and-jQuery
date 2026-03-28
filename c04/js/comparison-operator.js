var passar = 50;
var nota = 90;

var alunoPassou = nota >= passar;

var el = window.document.getElementById('answer');
el.textContent = 'Passou de nível: ' + alunoPassou;