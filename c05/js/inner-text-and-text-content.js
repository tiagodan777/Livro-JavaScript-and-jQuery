var item1 = window.document.getElementById('one');
var mostraTextContent = item1.textContent;
var mostraInnerText = item1.innerText;

var msg = '<p>textContent: ' + mostraTextContent + '</p>';
msg += '<p>innerText: ' + mostraInnerText + '</p>';

var scriptRes = window.document.getElementById('scriptResults');
scriptRes.innerHTML = msg;

item1.textContent = 'sourdough bread';