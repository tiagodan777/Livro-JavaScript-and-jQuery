var i = 1;
var msg = '';

while (i < 11) {
    msg += i + ' x 5 = ' + (i * 5) + '<br>';
    i++;
}

window.document.getElementById('answer').innerHTML = msg;