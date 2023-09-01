let licenciasVendidas = 0;
let salario = 0;
let comision = 0;

function calcularSalario() {
    let totalDevengado = 0;

    if (licenciasVendidas <= 0) {
        console.log("Datos ingresados no son válidos");
    } else {
        salario = 3500000;
        comision = licenciasVendidas * 1500000;
        totalDevengado = salario + comision;
    }
    return totalDevengado;
}

const totalDevengado = calcularSalario();
const deduccion = 0.5;
const cantidadDeduccion = totalDevengado * deduccion;

console.log(`El vendedor tiene un salario de ${salario} y comisiones de ${comision}.
El total devengado antes de la deducción es: ${totalDevengado}.
La deducción es: ${cantidadDeduccion}.`);
