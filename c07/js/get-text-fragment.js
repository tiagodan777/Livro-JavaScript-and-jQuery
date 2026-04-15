/// <reference types="jquery" />

var $listItems = $('ul').text();
$('ul').append('<p>' + $listItems + '</p>');