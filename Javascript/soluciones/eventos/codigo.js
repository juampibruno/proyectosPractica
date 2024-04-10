let alumnos = [{
    nombre: 'Juan',
    mail: "juan@gmail.com",
    materia: "Mate superior"
},{
    nombre: "Delfi",
    mail: "delfilinda@gmail.com",
    materia: "publicidad"
},{
    nombre: "Pedro",
    mail: "pedroBoka@gmail.com",
    materia: "filosofia"
}];

const contenedor = document.querySelector(".grid-container");
const boton = document.querySelector(".button-confirmar");


boton.addEventListener("click", ()=>{
    let confirmar = confirm("¿Estás seguro de que deseas confirmar las mesas?");
    if(confirmar) {
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos) {
            let semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
});

let htmlCode = "";

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let mail = datos["mail"];
    let materia = datos["materia"];
     htmlCode += `
        <div class = "grid-item nombre">${nombre}</div>
        <div class = "grid-item email">${mail}</div>
        <div class = "grid-item materia">${materia}</div>
        <div class = "grid-item semana">
            <select class = "semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`;

    contenedor.innerHTML = htmlCode;
}
