var item2 = window.document.getElementById('two');
var elTxt = item2.firstChild.nodeValue;
elTxt = elTxt.replace('pine nuts', 'kale');
item2.firstChild.nodeValue = elTxt;

/* OU, SE FORMOS DISCRETOS */

var item2 = window.document.getElementById('two');
item2.firstChild.nodeValue = 'teste'