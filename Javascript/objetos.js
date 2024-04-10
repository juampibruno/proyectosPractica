class Celular {
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
    }

    prender(){
        alert("Prendiendo");
    }

    reiniciar(){
        alert("Reiniciando");
    }

    tomarFoto(){
        alert("Tomando foto");
    }

    grabarVideo(){
        alert("Grabando video");
    }

}

let celular1 = new Celular("Rojo","150g","HD","Full HD","2GB");