
const calcularDistancia = (coordenadaxPlanetaUno, coordenadayPlanetaUno, coordenadaxPlanetaDos, coordenadayPlanetaDos) => {
    let distanciaCalculada = Math.sqrt(Math.pow(coordenadaxPlanetaDos - coordenadaxPlanetaUno, 2) + Math.pow(coordenadayPlanetaDos - coordenadayPlanetaUno, 2));
    return distanciaCalculada;
};

console.log("La distancia calculada es: " + calcularDistancia(10, 5, 20, 15));
