/*var elForm = window.document.getElementById('formSignup');
var elPackage = window.document.getElementById('package');
var elPackageHint = window.document.getElementById('packageHint');
var elTerms = window.document.getElementById('terms');
var elTermsHint = window.document.getElementById('termsHint');

function packageHint(e) {
    var event = e.target;
    var pack = event.options[event.selectedIndex].value;

    if (pack === 'monthly') {
        elPackageHint.innerHTML = 'Poupa 10% ao adquirir o anual!';
    } else {
        elPackageHint.innerHTML = 'Escolha sábia!';
    }
}

function checkTerms(e, el, hint) {
    var terms = el.checked;

    if (!terms) {
        hint.innerHTML = 'Aceita os termos e condições antes de submeter o formulário';
        e.preventDefault();
    }
}

elPackage.addEventListener('change', packageHint, false);
elForm.addEventListener('submit', function (e) {
    checkTerms(e, elTerms, elTermsHint)
}, false);*/

var elForm = window.document.getElementById('formSignup');
var packageSelected = window.document.getElementById('package');

elForm.addEventListener('submit', checkTerms, false);
packageSelected.addEventListener('change', packageHint, false);

function checkTerms(e) {
    var terms = window.document.getElementById('terms');
    var hint = window.document.getElementById('termsHint');

    if (!terms.checked) {
        hint.innerHTML = 'Aceita os nossos termos e condições';
        e.preventDefault();
    }
}

function packageHint() {
    var package = window.document.getElementById('package');
    var hint = window.document.getElementById('packageHint');

    if (package.options[package.selectedIndex].value === 'monthly') {
        hint.innerHTML = 'Poupa 10% ao adquirir o plano anual';
    } else {
        hint.innerHTML = 'Escolha sábia!';
    }
}