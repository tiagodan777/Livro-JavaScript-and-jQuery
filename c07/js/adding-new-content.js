/// <reference types="jquery" />

$(function() {
    $('ul').before('<p class="notice">Acabou de ser atualizado!');
    $('li.hot').prepend('+ ');
    var $newItem = $('<li><em>gluten free</em> soy sauce</li>');
    // $('li:last').after($newItem);
    $('ul').append($newItem);
});
