var numeroOriginal = 10.23456;

var msg = '<h2>número original</h2><p>' + numeroOriginal + '</p>';
msg += '<h2>3 cassas decimais</h2><p>' + numeroOriginal.toFixed(3) + '</p>';
msg += '<h2>3 dígitos</h2><p>' + numeroOriginal.toPrecision(5) + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;