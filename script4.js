/**let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

// Cursos comunes
let cursosComunes = student1Courses.filter(curso => student2Courses.includes(curso));

// Impresión si hay cursos comunes
if (cursosComunes.length > 0) {
    console.log('Cursos comunes:', cursosComunes.join(', '));
} else {
    console.log('No se encontraron cursos comunes.');
}


//Programing