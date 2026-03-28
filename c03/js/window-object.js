var msg = '<h2>página do browser</h2><p>largura: ' + window.innerWidth + '</p>';
msg += '<p>altura: ' + window.innerHeight + ' </p>';
msg += '<h2>histórico</h2><p>items: ' + window.history.length + '</p>';
msg += '<h2>ecrã</h2><p>largura: ' + window.screen.width + '</p>';
msg += '<p>altura: ' + window.screen.height + '</p>';
var el = window.document.getElementById('info');
el.innerHTML = msg;
window.alert('Página atual: ' + window.location);

msg = '<h2>Os meus testes</h2><p>scroll vertical: ' + window.pageYOffset + '</p>';
msg += '<p>scroll lateral: ' + window.pageXOffset + '</p>';
el.innerHTML += msg;