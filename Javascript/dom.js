const titulo = document.querySelector(".titulo");

 titulo.classList.add("grande");


 //Creacion de elementos

 const contenedor = document.querySelector(".contenedor");

 const item = document.createElement("LI"); //Tiene que ir en mayuscula o no funciona

item.textContent = "Soy un item de la lista";

contenedor.appendChild(item);

//Como agregamos varios elementos a la vez y sin consumir tantos recursos por tener que recargar el dom

const fragmento = document.createDocumentFragment();

for (let i = 0; i < 5; i++) {
    const item = document.createElement("LI");
    item.textContent = `Soy el item ${i}`;
    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento); //Con esto lo agregamos todo junto una sola vez


//Obtencion de los elementos hijos del elemento contenedor
const hijos = contenedor.children;

console.log(hijos); 