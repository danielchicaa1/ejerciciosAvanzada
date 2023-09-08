

function clasificarNumeros(matriz){
    let numeroCercanoCero=Infinity    //Inicializando variables
    let distanciaMinima=Infinity

    matriz.forEach(numeroActual => { 
            const distancia=Math.abs(numeroActual-0)
            if (distancia<distanciaMinima) { //comparando valores
                distanciaMinima=distancia //Actualizar la variable distancia minima
                numeroCercanoCero=numeroActual; //actualizar numeroCercanoCero
            }
    })
    return numeroCercanoCero // Devolver el numero mas cercano a cero
}
    const matriz=[10,-7,-9,-25,-32,-40]  //Quemando matriz
    const variableGuardar=clasificarNumeros(matriz)  //Guardando funcion en una variable
    console.log(`El número más cercano al cero es: ${Math.abs(variableGuardar)}`) //Imprimiendo y usando Math.abs para mostrar valor absolutoa