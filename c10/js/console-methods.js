console.info('E aqui vamos nós...');

var $form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
    console.warn('Inseriste o valor ', this.value);
});

$form.on('submit', function(e) {
    e.preventDefault();

    var $width = $('#width').val();
    var $height = $('#height').val();
    var area = $width * $height;

    console.error(area);

    $form.append('<p>' + area + '</p>');
})