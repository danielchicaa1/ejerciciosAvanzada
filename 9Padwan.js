let padawan = {
    nombre: "Eigpis",
    planeta: "Neptuno",
    edad: 25,
    estatura: 1.52
  }
  
  function asignarAprendices(edad) {
    if (edad < 15) {
      return "le corresponde el manejo de la fuerza";
    }
    return "le corresponde manejo del sable de luz";
  }
  
  console.log(`El padawan ${padawan.nombre} cuya estatura es ${padawan.estatura} metros y que vive en el planeta ${padawan.planeta}, ${asignarAprendices(16)}`);
  