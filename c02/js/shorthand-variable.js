/* MÉTODO 1 

var price = 5;
var quantity = 14;
var total = price * quantity;

/* MÉTODO 2 */

var price; var quantity; var total;
price = 5;
quantity = 14;
total = price * quantity;

/* MÉDOTO 3 

var price = 5, quantity = 14;
var total = price * quantity;
*/

var el = document.getElementById('cost');
el.textContent = '$' + total;