var level = 2;
var msg;

switch (level) {
    case 1:
        msg = 'Boa sorte com o primeiro teste';
        break;
    case 2:
        msg = 'Segundo de três — continua!';
        break;
    case 3:
        msg = 'Última ronda, quase lá!';
        break;
    default:
        msg = 'Boa sorte!';
        break;
}

var el = window.document.getElementById('answer');
el.textContent = msg;