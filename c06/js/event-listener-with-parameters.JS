var elUsername = window.document.getElementById('username');
var elMsg = window.document.querySelector('#feedback');

function checkUsername(min) {
    if (elUsername.value.length < min) {
        elMsg.textContent = 'O nome de utilizador tem que ter no mínimo ' + min + ' caracteres';
    } else {
        elMsg.textContent = '';
    }
}

elUsername.addEventListener('blur', function () {
    checkUsername(5);
}, false);