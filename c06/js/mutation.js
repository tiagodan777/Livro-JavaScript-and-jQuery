/* ESTE EXEMOPLO JÁ NÃO FUNCIONA */

var counter = window.document.querySelector('span');
var list = window.document.querySelector('ul');
var addButton = window.document.querySelector('a');

function addItem(e) {
    e.preventDefault();

    var li = window.document.createElement('li');
    var liText = window.document.createTextNode('Novo item da lista');

    li.appendChild(liText);
    list.appendChild(li);
}

function updateCounter() {
    listLenght = list.getElementsByTagName('li').length;
    counter.innerHTML = listLenght;
}

addButton.addEventListener('click', addItem, false);
list.addEventListener('DOMNodeInserted', updateCounter, false);