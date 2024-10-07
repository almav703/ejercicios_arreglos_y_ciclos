/**For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
 */


let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Imprimir nombres en la lista.
console.log(people);

//Elimino a "Dani"
people = people.filter(persona => persona !== "Dani");

//Eliminar "Juan"
people = people.filter(persona => persona !== "Juan");

//Mover "Luis" a la primera posición
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

//Agrego mi nombre
people.push("AlmaValeria");

//Sacar de bucle a "MAria"
for (let persona of people) {
    console.log(persona);
    if (persona === "Maria") {
        break; // Salir del bucle después de imprimir "Maria"
    }
}

//Indice de "Maria"
let mariaIndex = people.indexOf("Maria");
console.log("Índice de Maria:", mariaIndex);

// 4 personas en la matriz quedaron
console.log("Lista final:", people);
