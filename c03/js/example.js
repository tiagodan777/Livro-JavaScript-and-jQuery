(function () {
    var hotel = {
        nome: 'Park',
        preco: 240,
        desconto: 15,
        calcularPreco: function() {
            return this.preco - (this.preco * 15 / 100);
        }
    }

    var hotelName = window.document.getElementById('hotelName');
    var roomRate = window.document.getElementById('roomRate');
    var specialRate = window.document.getElementById('specialRate');

    hotelName.innerHTML = hotel.nome;
    roomRate.innerHTML = '$' + hotel.preco.toFixed(2);
    specialRate.innerHTML = '$' + hotel.calcularPreco();

    var dias = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ];
    var meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    var hoje = new Date();
    var expirar = hoje.getTime() + 604800000;
    var data = new Date(expirar);

    var offerEnds = window.document.getElementById('offerEnds');
    offerEnds.innerHTML = 'A oferta termina no/a próximo/a ' + dias[data.getDay()] + '<br>(' + data.getDate() + ' ' + meses[data.getMonth()] + ' ' + data.getFullYear() + ')';
}());

