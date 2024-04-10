const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector('.contenedor-2');

const input = document.querySelector(".input");

//Eventos de Mousse

button.addEventListener("click",(e) => {
    alert("di click en el boton");
    e.stopPropagation();
});

contenedor1.addEventListener("click",(e) => {
    alert("di click en el contenedor 2");
},true); //Al poner true se pone primero en la cola de eventos. Si hay 2 true importa el orden de declaracion

contenedor2.addEventListener("contextmenu",(e) => {
    alert("di click derecho en el contenedor 2");
});



//Eventos de teclado

input.addEventListener("keydown",() => {
    console.log("una tecla fue presionada");
});

input.addEventListener("keypress",(e) => {
    console.log("una tecla fue presionada y la soltaron dentro del input");
});

input.addEventListener("keyup",(e) => {
    console.log("una tecla fue soltada");
});

//Eventos de interfaz
//Poner el window no es necesario, ya que por defecto se toma el objeto window
window.addEventListener("resize",() => {
    console.log("la ventana fue redimensionada");
});

addEventListener("scroll",() => {
    console.log("se hizo scroll en la pagina");
});

input.addEventListener("select",(e) => {
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    contenedor1.textContent = textoCompleto.substring(start,end);
});


//Timers

const intervalo = setInterval(()=>{
    document.write("Hola cada 2 segs");
},2000);

clearInterval(intervalo); //Lo detengo antes que se ejecute

// setTimeout(()=>{
//     clearInterval(intervalo);
// },5000); //Asi lo detengo luego de 5 segs