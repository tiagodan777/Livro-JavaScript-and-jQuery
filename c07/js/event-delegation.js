$(function() {
    $('ul').on(
        'mouseover click',
        ':not(#four)',
        {'status': 'importante'},
        function(e) {
            var item = 'Item: ' + $(e.target).text() + '<br>';
            var status = 'Status: ' + e.data.status + '<br>';
            var event = 'Event: ' + e.type + '<br>';

            $('#notes').html(item + status + event);
        }
    )
})