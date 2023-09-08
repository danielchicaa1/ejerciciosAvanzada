function generarPlanetaAleatorio() {
    const nombres = ["Tierra", "Marte", "Jupiter", "Venus", "Saturno", "Urano", "Neptuno", "Plutón"];
    
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    const altitudAleatoria = Math.random() * 200; // Altitud ,valor 0 y 200
    const longitudAleatoria = Math.random() * 30; // Longitud ,valor 0 y 30
    const nivelOxigenoAleatorio = Math.random() * 0.5; // Nivel de oxígeno,valor 0 y 0.5
    const volumenAguaAleatorio = Math.random() * 1; // Volumen de agua,valor 0 y 1
    
    return {
        nombre: nombreAleatorio,
        altitud: altitudAleatoria,
        longitud: longitudAleatoria,
        nivelOxigeno: nivelOxigenoAleatorio,
        volumenAgua: volumenAguaAleatorio
    };
}

let planetas = [];

// Generar 15 planetas aleatorios y agregarlos al array
for (let i = 0; i < 15; i++) {
    const planetaAleatorio = generarPlanetaAleatorio();
    planetas.push(planetaAleatorio);
}

let sumarCantidadAgua=planetas.map(function(planeta){
    return planeta.volumenAgua;
}).reduce(function(total,agua){
    return total+agua;},0);
let CalcularOxigeno=planetas.map(function(planeta){
        return planeta.nivelOxigeno;
 }).reduce(function(total,oxigeno){
        return total+oxigeno*100;},0);
let analizarOxigeno=planetas.filter(function(planeta){
    return (planeta.nivelOxigeno<0)
}) 
let analizarVolumenagua=planetas.filter(function(planeta){
    return (planeta.volumenAgua==0)
})  

console.log("----Analisis de planetas---");    
console.log("La suma total de agua entre los planetas es de: ",sumarCantidadAgua);
console.log(`El porcentaje de oxígeno en la Tierra es: `,CalcularOxigeno);
console.log("Los planetas con nivel de oxigeno negativo son: ",analizarOxigeno)
console.log("Los planetas que no tienen agua son: ",analizarVolumenagua)