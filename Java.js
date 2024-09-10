// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Solicitar al usuario que ingrese los dos números
const num1 = parseFloat(prompt("Ingrese el primer número: "));
const num2 = parseFloat(prompt("Ingrese el segundo número: "));

// Calcular la suma
const resultado = sumar(num1, num2);

// Mostrar el resultado
console.log(`La suma de ${num1} y ${num2} es: ${resultado}`);
alert(`La suma de ${num1} y ${num2} es: ${resultado}`);
