function calcularFactorial() {
    while (true) {
        // Pedimos al usuario que ingrese un número mediante el prompt
        let n = prompt('Ingrese un número entero positivo: ');

        // Convertimos la entrada a número
        n = Number(n);

        // Verificamos si es un número entero válido
        if (!isNaN(n) && n >= 0 && Number.isInteger(n)) {
            let resultado = factorial(n);
            // Mostramos el resultado en el DOM
            document.getElementById('result').innerHTML = `El factorial de ${n} es: ${resultado}`;
            break;  // Terminamos el ciclo si el número es válido
        } else {
            alert('Por favor, ingresa un número entero positivo válido.');
        }
    }
}

// Función recursiva para calcular el factorial
function factorial(numero) {
    if (numero < 2) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

// Llamamos a la función para ejecutar el cálculo cuando se carga la página
calcularFactorial();
