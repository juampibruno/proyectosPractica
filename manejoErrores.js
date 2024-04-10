try {
    throw {
        error: "Nombre del error",
        info: "Información del error"
    }
}
catch (e) {
    console.log(typeof e);
}
finally {
    
}


try {
    throw {
       nombres: ["pedro","nico"]
    }
}
catch (error) {
    console.log(error.nombres[0]);
}
finally {
}