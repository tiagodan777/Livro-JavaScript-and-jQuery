var hoje = new Date();
var passado = new Date(2005, 11, 29);
var diferenca = hoje.getTime() - passado.getTime();
diferenca = diferenca / 31556900000;

var el = window.document.getElementById('message');
el.innerHTML = Math.floor(diferenca) + ' anos de serviço online';