var $form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
    console.assert(this.value > 10, 'O utilizador introduziu menos que 10');
});

$form.on('submit', function(e) {
    e.preventDefault();

    var width = $('#width').val();
    var height = $('#height').val();
    var area = width * height;

    console.assert(Number(area), 'O utilizador introduziu um valor que não é um número');

    $form.append('<p>' + area + '</p>');
})