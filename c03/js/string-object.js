var saying = 'Lar doce lar ';

var msg = '<h2>comprimento</h2><p>' + saying.length + '</p>';
msg += '<h2>maiúsculo</h2><p>' + saying.toUpperCase() + '</p>';
msg += '<h2>minúsculo</h2></p>' + saying.toLowerCase() + '</p>';
msg += '<h2>index do caractér 5: </h2><p>' + saying.charAt(5) + '</p>';
msg += '<h2>primeira vez que "ar" aparece: </h2><p>' + saying.indexOf('ar') + '</p>';
msg += '<h2>última vez que "r" aparece: </h2><p>' + saying.lastIndexOf('r') + '</p>';
msg += '<h2>o que é que aparece entre os caracteres 2 e 8: </h2><p>' + saying.substring(2, 8) + '</p>';
msg += '<h2>trocar "ar" por "er": </h2><p>' + saying.replace('ar', 'er') + '</p>'; 

var el = window.document.getElementById('info');
el.innerHTML = msg;