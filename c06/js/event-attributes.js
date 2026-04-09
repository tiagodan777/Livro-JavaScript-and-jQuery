function checkUsername() {
    var elMsg = window.document.getElementById('feedback');
    var elusername = window.document.getElementById('username');
    if (elusername.value.length < 5) {
        elMsg.textContent = 'O nome de utilizador tem que ter no mínimo 5 caracteres';
    } else {
        elMsg.textContent = '';
    }
}