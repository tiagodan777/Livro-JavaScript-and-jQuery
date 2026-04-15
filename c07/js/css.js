/// <reference types="jquery" />

$(function() {
    var $cor = $('li').css('background-color');
    $('ul').append('<p>A cor era: ' + $cor + '</p>');

    $('li').css({
        'background-color': '#c5a996',
        'color': '#000000',
        'border': '1px solid #ffffff',
        'font-family': 'Georgia',
        'padding-left': '+=75',
        'text-shadow': 'none'
    });

    $('li:last').css('color', 'yellow');
});