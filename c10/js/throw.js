var width = 12;
//var height = 'teste';
var height = 12

function calculateArea(width, height) {
    try {
        var area = width * height

        if (!isNaN(area)) {
            return area;
        } else {
            throw new Error('A função calculateArea() recebeu um número inválido');
        }
    } catch(e) {
        console.log(e.name + ' ' + e.message);
        return 'Não foi possível calcular a área';
    }
}

var area = calculateArea(width, height);

$('#area').html(area);