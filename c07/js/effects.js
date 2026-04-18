/*$(function() {
    $('h2').hide().slideDown();

    var $li = $('li');
    $li.hide();
    $li.each(function(index) {
        $(this).delay(700 * index).fadeIn(700);
    })
    $li.on('click', function() {
        $(this).fadeOut(700);
    })
});*/

$(function() {
    var $li = $('li');
    $li.hide();
    $('h2').on('click', function() {
        $li.each(function(index) {
            $(this).delay(100 * index).slideToggle();
        })
    });
});