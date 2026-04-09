function setUp() {
    var inputText = window.document.getElementById('username');
    inputText.focus();
}

window.addEventListener('load', setUp, false);