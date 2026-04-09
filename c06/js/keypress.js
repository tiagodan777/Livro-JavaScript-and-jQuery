function charCount(e) {
    var textEntered = window.document.getElementById('message').value;
    var charactersLeft = window.document.getElementById('charactersLeft');
    var lastKey = window.document.getElementById('lastKey');

    charactersLeft.textContent = (180 - textEntered.length);
    lastKey.innerHTML = '<p>Útimo código de caracter ASCII: ' + e.keyCode + '</p>';
    lastKey.innerHTML += '<p>Última letra: ' + String.fromCharCode(e.keyCode) + '</p>';
    console.log(e.keyCode);
}

var el = window.document.getElementById('message');
el.addEventListener('keydown', charCount, false);