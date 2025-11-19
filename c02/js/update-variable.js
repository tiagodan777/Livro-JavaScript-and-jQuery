var inStock;
var shipping;

inStock = true;
shipping = false;

/* Aqui poderia vir outros procedimentos
que podiam fazer com que os valores das
variáveis tivessem que mudar */

inStock = false;
shipping = true;

var elStock = document.getElementById('stock');
elStock.className = inStock;
var elShip = document.getElementById('shipping');
elShip.className = shipping;

