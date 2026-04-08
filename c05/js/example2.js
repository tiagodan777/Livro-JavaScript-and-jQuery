var list = window.document.getElementsByTagName('ul')[0];

var ultimoItem = window.document.createElement('li');
var ultimoTexto = window.document.createTextNode('cream');
ultimoItem.appendChild(ultimoTexto);
list.appendChild(ultimoItem);

var primeiroItem = window.document.createElement('li');
var primeiroTexto = window.document.createTextNode('kale');
primeiroItem.appendChild(primeiroTexto);
list.insertBefore(primeiroItem, list.firstChild);

var listItems = window.document.querySelectorAll('li');

for (var c = 0; c < listItems.length; c++) {
    listItems[c].className = 'cool';
}

var header = window.document.querySelector('h2');
header.innerHTML += '<span>' + listItems.length + '</span>';