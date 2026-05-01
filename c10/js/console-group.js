var $form = $('#calculator');

$form.on('submit', function(e) {
    e.preventDefault();

    console.log('Submeteste o formulário...');

    var $width = $('#width').val();
    var $height = $('#height').val();
    var area = $width * $height;

    console.group('Cálculo de Área');
        console.info('Largura: ', $width);
        console.info('Altura: ', $height);
        console.log(area);
    console.groupEnd();

    $form.append('<p>' + area + '</p>');
});