function writeLabel() {
    var noteInput = window.document.getElementById('noteInput');
    var noteName = window.document.getElementById('noteName');

    if (noteInput.value == '' && noteName.textContent == 'Audio Note') {
        noteName.textContent = 'Audio Note';
    } else {
        noteName.textContent = noteInput.value;
    }
}

function changeIcon(e) {
    e.preventDefault();
    
    var a = e.target;
    var state = a.getAttribute('data-state');

    switch (state) {
        case 'record':
            a.setAttribute('data-state', 'stop');
            break;
        case 'stop':
            a.setAttribute('data-state', 'record');
            break;
        default:
            a.setAttribute('data-state', 'record');
            break;
    }
}


window.document.addEventListener('keyup', writeLabel, false);
window.document.getElementById('buttons').addEventListener('click', function(event) {
    changeIcon(event);
}, false);