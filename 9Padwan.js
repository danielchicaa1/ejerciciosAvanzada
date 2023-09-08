//crear funcion prinicipal
function  clasificarPadawan(nombre, planeta, edad , estatura,clasificarPadawan){
  setTimeout(function(){
      let padawan = {
      nombreEstudiante: nombre,
      planetaEstudiante:planeta,
      edadEstudiante: edad,
      estaturaEstudiante: estatura
  }
      clasificarPadawan(padawan)
  },2000)
}
//Llamar a la funcion principal
  crearPadawan("Groju" , "yodora", 500, 30 ,function(padawan){
  if (padawan.edadEstudiante<15){
    console.log(`El padawan ${padawan.nombreEstudiante} cuya edad es ${padawan.edadEstudiante}años vas a manejo de la fuerza`);
  }
      console.log(`El padawan ${padawan.nombreEstudiante} cuya edad es ${padawan.edadEstudiante} años vas a nanejo sable de luz`);
})