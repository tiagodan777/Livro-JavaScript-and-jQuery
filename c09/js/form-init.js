$(function() {
    $('#chegada').datepicker();
    
    var $preco = $('#preco');
    var $variacaoPreco = $('#variacao-preco');

    $variacaoPreco.slider({
        range: true,
        min: 0,
        max: 400,
        values: [175, 300],
        slide: function(event, ui) {
            $preco.val('$' + ui.values[0] + ' - $' + ui.values[1]);
        }
    });
    
    $preco.val('$' + $variacaoPreco.slider('values', 0) + ' - $' + $variacaoPreco.slider('values', 1))
})