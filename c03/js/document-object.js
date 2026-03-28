var msg = '<p>título da página: ' + document.title + '</p>';
msg += '<p>morada da página: ' + document.URL + '</p>';
msg += '<p>última modificação: ' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;