function checkLength(e, minLength) {
    var el = e.target;
    var elMsg = el.nextSibling;

    if (el.value.length < minLength) {
        elMsg.innerHTML = 'O mínimo de caracteres é ' + minLength;
    } else {
        elMsg.innerHTML = '';
    }
}

var elUsername = window.document.getElementById('username');
elUsername.addEventListener('blur', function (e) {
    checkLength(e, 5);
}, false);