$(function() {
    var $listItems = $('li');

    $('.hot:last').removeClass('hot');
    $listItems.filter(':not(.hot)').addClass('cool');
    $listItems.has('em').addClass('complete');

    $listItems.each(function() {
        if ($(this).is('.hot')) {
            $(this).prepend('Item com prioridade: ');
        }
    });

    $('li:contains("honey")').append(' (local)');
});