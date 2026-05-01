var $form = $('#calculator');

$form.on('submit', function(e) {
    e.preventDefault();
    console.log('Formulário submetido...');

    var width = $('#width').val();
    var height = $('#height').val();
    var area = width * height;

    if (area < 100) {
        debugger;
    }

    $form.append('<p>' + area + '</p>');
});