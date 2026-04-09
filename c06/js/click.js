var msg = '<div class=\"header\"><a id=\"close\" href=\"#\">fechar X</a></div>';
msg += '<div><h2>Sistema em Manutenção</h2>';
msg += 'Os nossos servidores estão em manutenção entre as 3 e 4 da manhã. Durante este periodo podem haver alguns erros no site.</div>';

var elNote = window.document.createElement('div');
elNote.id = 'note';
elNote.innerHTML = msg;

window.document.body.appendChild(elNote);

function fecharNota() {
    window.document.body.removeChild(elNote);
}

var fechar = window.document.getElementById('close');

fechar.addEventListener('click', fecharNota, false);