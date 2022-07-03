alert('Vamos a calucular tus gastos');
let nombre = prompt('¿Cual es tu nombre?');
let numAsig = parseInt(prompt('Cuantas asignaturas vas a matricular'));
let valorTot = 0;
for (x=0;x< numAsig;x++){
    valorTot += parseFloat(prompt('Digite el valor de la asignatura' + (x+1)));
}
const cargoFijo = 20000;
const carnet = 8000;
const descuento = 20;
valorTot = valorTot*(descuento/100) + cargoFijo + carnet;
alert(nombre + ',tus gastos son de:' + valorTot);