$(function() {
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $inputText = $('input:text');

    $newItemButton.show();
    $newItemForm.hide();

    $newItemButton.on('click', function() {
        $newItemButton.hide();
        $newItemForm.show();
    })

    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        var newText = $inputText.val();
        $('li:last').after('<li>' + newText + '</li>');
        $newItemButton.show();
        $newItemForm.hide();
        $inputText.val('');
    })
});