/**Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]
 */


function ordenarBurbuja(arreglo) {
    let n = arreglo.length; // Obtener la longitud del arreglo
    // Hacer varias pasadas por el arreglo
    for (let x = 0; x < n - 1; x++) {
        // Comparar cada número con el siguiente
        for (let y = 0; y < n - 1 - x; y++) {
            // Si el número actual es mayor que el siguiente
            if (arreglo[y] > arreglo[y + 1]) {
                // Intercambiar los dos números
                let temp = arreglo[y]; // Guardar el número actual
                arreglo[y] = arreglo[y + 1]; // Poner el siguiente número en su lugar
                arreglo[y + 1] = temp; // Poner el número guardado en el siguiente lugar
            }
        }
    }
    return arreglo; // Devolver el arreglo ordenado
}

// Ejemplo de uso
let entrada = [3, 6, 12, 5, 100, 1]; // Arreglo desordenado
let salida = ordenarBurbuja(entrada); // Ordenar el arreglo
console.log(salida); // Mostrar el arreglo ordenado: [1, 3, 5, 6, 12, 100]
