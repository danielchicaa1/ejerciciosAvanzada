let edades = [];
let codigos = [];
let edadMayor = 0; // Inicializamos en 0, ya que no se ha generado ninguna edad aún

for (let i = 0; i < 20; i++) {
    // Generar una edad aleatoria entre 10 y 60
    let edadAleatoria = Math.floor(Math.random() * 51) + 10;
    edades.push(edadAleatoria);
    
    // Actualizar la edad mayor si es necesario
    if (edadAleatoria > edadMayor) {
        edadMayor = edadAleatoria;
    }

    // Generar un código aleatorio entre 10 y 99
    let codigoAleatorio = Math.floor(Math.random() * 90) + 10;
    codigos.push(codigoAleatorio);
}

console.log("Edades generadas:", edades);
console.log("Códigos generados:", codigos);
console.log("Edad mayor encontrada:", edadMayor);
