
let frutas = ["manzana", "pera", "uva", "sandia"];
document.write(frutas); // Imprime todas las frutas
document.write(frutas[0]); // Imprime manzana

//Arrays Asociativos
let pc = {
    nombre: "Lenovo",
    procesador: "Intel",
    ram: "16GB",
    espacio: "1TB"
};

document.write(pc["nombre"]); // Imprime Lenovo

let frase = `el nombre de mi pc es ${pc.nombre}<br>`; //Lo bueno de usar Backstricks que permite usar ${} y las etiquetas HTML
document.write(frase);


let animales = ["perro", "gato", "tigre", "leon"];

for (animal in animales) {
    document.write(animal + "<br>");
}

document.write("<br>");

for (animal of animales) {
    document.write(animal + "<br>");
}

//Diferencia entre for in y for of

//for in: devuelve el indice
//for of: devuelve el valor

function saludar() {
    let nombre = prompt("Cual es tu nombre?");

alert("Hola "+ nombre);
document.write(nombre); // Imprime en el documento
}

saludar();

/*Funciones flecha, lo unico que cambia es que se saca en function por =>*/

const saludarflecha = (nombre) => {
    let frase = `Hola ${nombre}! como estas? <br>`;
    document.write(frase);
}

saludarflecha("juan");
