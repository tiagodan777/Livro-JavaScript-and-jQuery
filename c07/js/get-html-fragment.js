/// <reference types="jquery" />

var $listaHTML = $('ul');
$listaHTML.append($listaHTML.html());

/* A MANEIRA DO LIVRO */

var listHTML = $('ul').html();
$('ul').append(listHTML);