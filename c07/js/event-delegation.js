$(function() {
    $('ul').on(
        'click mouseover',
        ':not(#four)',
        {'status': 'importante'},
        function(e) {
            var item = 'Item: ' + e.target.textContent;
            var status = '<br>Status: ' + e.data.status;
            var event = '<br>Evento: ' + e.type
            $('#notes').html(item + status + event);
        }
    );
});