function checkUsername() {
    var el = username.value;
    var msg = userFeedback;

    if (el.length < 5) {
        msg.className = 'warning';
        msg.textContent = 'Ainda não é longo o suficiente...';
    } else {
        msg.textContent = '';
    }
}

function tipUser() {
    var msg = userFeedback;

    msg.className = 'tip';
    msg.textContent = 'O username precisar ter pelo menos 5 caracteres';
}

var username = window.document.getElementById('username');
var userFeedback = window.document.getElementById('feedback');

username.addEventListener('blur', checkUsername, false);
username.addEventListener('focus', tipUser, false);