$(function() {
    var $p = $('p');
    var $cloneP = $p.clone();
    $p.remove();
    $cloneP.insertAfter('h2');
    // $('h2').after($cloneP);
    var $firstItem = $('#one').detach();
    $firstItem.appendTo('ul');
    // $('ul').append($firstItem);
})