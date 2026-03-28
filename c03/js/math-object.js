var numeroOriginal = Math.random();
var numero = Math.floor(numeroOriginal * 10 + 1);
var el = window.document.getElementById('info');
el.innerHTML = '<h2>número alietório: </h2><p>' + numero + '</p>';

/* OU */

var outroNumerooriginal = Math.floor(Math.random() * 10 + 1);
el.innerHTML += '<h2>outro número alietório: </h2><p>' + outroNumerooriginal + '</p>';