var number = 3;
var operator = 'multiplicacao';
var i = 1;
var msg = '';

if (operator === 'adicao') {
    while (i < 11) {
        msg += number + ' + ' + i + ' = ' + (number + i) + '<br>';
        i++;
    }
} else {
    while (i < 11) {
        msg += number + ' x ' + i + ' = ' + (number * i) + '<br>';
        i++;
    }
}

window.document.getElementById('blackboard').innerHTML = msg;