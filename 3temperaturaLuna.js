function temperaturaLuna(temperaturaMinima,temperaturaMaxima){
    const temperaturaMedia= (temperaturaMinima + temperaturaMaxima)/2
    return temperaturaMedia
}

console.log(`la temperatura media de la luna es ${temperaturaLuna(18,18)}`);