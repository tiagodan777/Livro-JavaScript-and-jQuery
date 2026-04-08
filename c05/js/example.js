/* PARTE 1 */
var ul = window.document.getElementsByTagName('ul')[0];

var newFirstItem = window.document.createElement('li');
var newFirstItemText = window.document.createTextNode('kale');

var newLastItem = window.document.createElement('li');
var newLastItemText = window.document.createTextNode('cream');

newFirstItem.appendChild(newFirstItemText);
newLastItem.appendChild(newLastItemText);

var allLi = window.document.getElementsByTagName('li');
var copyAllLi = []

for (let c = 0; c < allLi.length; c++) {
    copyAllLi[c] = allLi[c].textContent;
}

var lengthAllLi = allLi.length
for (let c = 0; c < lengthAllLi; c++) {
    ul.removeChild(allLi[0])
}

ul.appendChild(newFirstItem);
for (let c = 0; c < copyAllLi.length; c++) {
    var li = window.document.createElement('li')
    var liText = window.document.createTextNode(copyAllLi[c]);
    
    li.appendChild(liText);
    ul.appendChild(li);
}
ul.appendChild(newLastItem);



/* PARTE 2 */

for (let c = 0; c < allLi.length; c++) {
    allLi[c].className = 'cool';
}



/* PARTE 3 */

var header = window.document.querySelector('h2');
header.innerHTML += '<span>' + allLi.length + '</span>';








/*var newArrayEls = [];
var allLi = window.document.getElementsByTagName('li');
for (let c = 0; c < allLi.length; c++) {
    newArrayEls[c+1] = allLi[c];
}
ul.appendChild(newFirstItem);
ul.appendChild(newLastItem);
*/

/*var elementos = (function() {
    var texto = '';
    for (let c = 0; c < newArrayEls.length; c++) {
        texto += newArrayEls[c].textContent + ' '; 
    }
    return texto;
}());
alert(elementos);*/