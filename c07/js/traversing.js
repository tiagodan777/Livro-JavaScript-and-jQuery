$(function() {
    var $h2 = $('h2');
    $h2.next().hide();
    $h2.append('<a class="show">mostrar</a>');
    $h2.on('click', function() {
        $h2.next()
            .fadeIn(500)
            .children('.hot')
            .addClass('complete');
        $h2.children().fadeOut(500);
    });
})