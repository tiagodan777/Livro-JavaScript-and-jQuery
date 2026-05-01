console.log('E cá vamos nós...');

var $form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
    console.log('Escreveste ', this.value); 
});

$form.on('submit', function(e) {
    e.preventDefault();

    console.log('Submeteste o formulário!')

    var width = $('#width').val();
    var height = $('#height').val();

    var area = width * height;

    console.log('Largura: ', width);
    console.log('Altura: ', height);
    console.log('Area: ', area);

    $form.append('<p>Área: ' + area + '</p>');
})