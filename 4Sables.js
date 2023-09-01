let contadorNegativos = 0;
let cantidadSables = [1, 2, 4, -9, -8, -7, -6, 4, 2, 3];
let i = 0;

while (i < cantidadSables.length) {
  if (cantidadSables[i] < 0) {
    contadorNegativos += 1;
  }
  i++; // Incrementar i en cada iteración
}

console.log("La cantidad de sables con energía negativa es: " + contadorNegativos);