var newEl = window.document.createElement('li');
var newText = window.document.createTextNode('quinoa');
newEl.appendChild(newText);
var ul = window.document.getElementsByTagName('ul')[0];
ul.appendChild(newEl);