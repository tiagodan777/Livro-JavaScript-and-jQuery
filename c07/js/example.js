$(function() {
    /* MOSTRAR ITEMS, ESCONDER E MOSTRAR O OS BOTÕES CORRETOS E MOSTRAR NUM DE ITEMS */
    var $listItems = $('li');

    $listItems.hide();
    $listItems.each(function(index) {
        $(this).delay(250 * index).fadeIn(250);
    });

    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');

    $newItemButton.show();
    $newItemForm.hide();

    /* FUNÇÃO UPDATE COUNT */

    function updateCount() {
        var $numItems = $('li').filter(':not(.complete)').length;
        $('#counter').text($numItems);
    }
    updateCount();

    /* ADICIONAR ELEMENTOS */

    $newItemButton.on('click', function() {
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function(e) {
        e.preventDefault();

        var $text = $('input:text');
        $('li:last').after('<li>' + $text.val() + '</li>');
        $text.val('');
        updateCount();
    });

    /* COMPLETAR ELEMENTOS E REMOVE-LOS DA LISTA */

    var $ul = $listItems.parent();

    $ul.on('click', 'li', function() {
        var $item = $(this);

        if(!$item.is('.complete')) {
            $ul.hide();
            var $complete = $item.detach();

            $ul.append($complete);

            $item.addClass('complete');

            $ul.fadeIn(200);
            
            updateCount();
        } else {
            var $complete = $item;

            $complete.animate({
                                'paddingLeft' : '+=160',
                                'opacity' : '0'
                                }, 400, function() {
                                    $(this).remove();
                                });
        }
    });
});