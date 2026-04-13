function setUp() {
    var el = window.document.getElementById('message');

    el.focus();
}

window.addEventListener('DOMContentLoaded', setUp, false);

window.addEventListener('beforeunload', function (e) {
    var message = 'Tens modificações não guardadas...';
    e.returnValue = message;
    return message;
})