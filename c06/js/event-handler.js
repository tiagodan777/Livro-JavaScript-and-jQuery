function checkUsername() {
    var elMsg = window.document.getElementById('feedback');
    if (this.value.length < 5) {
        elMsg.textContent = 'O nome de utilizador precisa ter no mínimo 5 caracteres';
    } else {
        elMsg.textContent = '';
    }
}

var elUsername = window.document.getElementById('username');
elUsername.onblur = checkUsername;