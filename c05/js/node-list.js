var elements = window.document.querySelectorAll('li.hot');

if (elements.length > 0) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].className = 'cool';
    }
}