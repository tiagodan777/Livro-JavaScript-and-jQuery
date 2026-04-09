function getTarget(e) {
    return e.target;
}

function itemDone(e) {
    var el = getTarget(e);
    var elParent = el.parentNode;
    var elGrandParent = elParent.parentNode;

    elGrandParent.removeChild(elParent);

    e.preventDefault();
}

function dontOpenLink(e) {
    e.preventDefault();
}

var el = window.document.getElementById('shoppingList');
el.addEventListener('dblclick', function (e) {
    itemDone(e);
}, false);

el.addEventListener('click', function (e) {
    dontOpenLink(e);
}, false);