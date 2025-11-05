var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Boa Noite!';
} else if (hourNow > 12) {
    greeting = 'Boa tarde!';
} else if (hourNow > 0) {
    greeting = 'Bom dia!';
} else {
    greeting == 'Bem vindo/a!';
}

document.write('<h3>' + greeting + '</h3>');