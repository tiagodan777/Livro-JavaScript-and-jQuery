var firstItem = window.document.getElementById('one');
if (firstItem.hasAttribute('class')) {
    var itemClass = firstItem.className; 
    
    /* OU */

    var itemClassAlt = firstItem.getAttribute('class');
    var el = window.document.getElementById('scriptResults');

    el.innerHTML = '<p>A classe do 1º item da lista é: <em>' + itemClass + '</em></p>' + 
                    '<p>Ou, alternativamente, a classe do 1º item da lista é: <em>' + itemClass + '</em></p>';
}