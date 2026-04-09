var sx = window.document.getElementById('sx');
var sy = window.document.getElementById('sy');
var px = window.document.getElementById('px');
var py = window.document.getElementById('py');
var cx = window.document.getElementById('cx');
var cy = window.document.getElementById('cy');

function showPosition(event) {
    sx.value = event.screenX;
    sy.value = event.screenY;
    px.value = event.pageX;
    py.value = event.pageY;
    cx.value = event.clientX;
    cy.value = event.clientY;
}

var el = window.document.getElementById('body');

el.addEventListener('mousemove', showPosition, false);