let planeta1 = {
    nombre: "Tierra",
    altitud: 80.5,
    longitud: 9.1,
    nivelOxigeno: 0.21,
    volumenAgua: 0.5
};

let planeta2 = {
    nombre: "Jupiter",
    altitud: 180.5,
    longitud: 19.10,
    nivelOxigeno: -0.1,
    volumenAgua: 0.1
};

let planetas = [planeta1, planeta2];

function analizarVolumenAgua(planetas) {
    let volumenesAgua = planetas.map(function(planeta) {
        return planeta.volumenAgua;
    });

    let suma = 0;
    volumenesAgua.forEach(function(volumenAgua) {
        suma += volumenAgua;
    });

    return suma;
}

console.log(analizarVolumenAgua(planetas));

function analizarNivelOxigeno(planetas) {
    let nivelesOxigeno = planetas.map(function(planeta) {
        return planeta.nivelOxigeno;
    });

    let operacion = 0;
    nivelesOxigeno.forEach(function(nivelOxigeno) {
        operacion = (operacion + nivelOxigeno) * 100;
    });

    return operacion;
}

console.log(analizarNivelOxigeno(planetas));

//Encontrar si alguno de los 15 planetas tiene un nivel de oxigeno 
//negativo y de ser así mostrar la información general de este

function analizarnivelOxigenoNegativo(planetas) {
    let nivelesOxigeno = planetas.map(function(planeta) {
        return planeta.nivelOxigeno;
    });

    let nivelNegativo = null; // Cambiado a null para indicar que no se ha encontrado ningún nivel negativo
    nivelesOxigeno.forEach(function(nivelOxigeno) {
        if (nivelOxigeno < 0) {
            nivelNegativo = nivelOxigeno; // Corregido el operador para asignar el valor correctamente
        }
    });
    return nivelNegativo;
}

let nivelOxigenoNegativo = analizarnivelOxigenoNegativo(planetas);
if (nivelOxigenoNegativo !== null) {
    console.log("Se encontró un nivel de oxígeno negativo:", nivelOxigenoNegativo);
} else {
    console.log("No se encontraron niveles de oxígeno negativos.");
}

