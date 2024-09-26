const prompt = require("prompt-sync") ()

while (true) {
    // Pedimos al usuario que ingrese un número.
    let n = prompt('Ingrese un numero entero: ');
   
    // Convertimos la entrada a un número flotante.
    n = Number(n);
 
    // Verificamos que el número sea un número entero positivo.
    if (!isNaN(n) && n >= 0 && Number.isInteger(n)) {
        // Llamando a la función y mostrando en pantalla el resultado.
        console.log(`El factorial de ${n} es: ${factorial(n)}`);
    } else {
        console.log('Por favor, ingresa un número entero positivo válido.');
    }
}
// Si n es < 2, n = 1
// Si n es < 2, n = (n * (n - 1)!)

function factorial(numero){
    if(numero < 2){
        return 1
    }
    else{
        return (numero * (factorial(numero - 1)))
    } 
}