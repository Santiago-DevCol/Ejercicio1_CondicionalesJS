//cargo por tipo de vahiculo
const tipoCarro = 0.20
const tipoMoto = 0.10
const tipoAutobus = 0.5




//variables de funcionamiento
let distanciaRecorrida = null
let mensaje = null
let totalAPagar = null
let precioKilometro = null
let litrosConsumidos = null
let extraLitros = null

alert("Bienvenido");
let tipoVehiculo = parseInt(prompt("indica: \r 1 para carro  \r 2 para moto \r 3 para autobús"));

//Validar que el ingreso de la opcion sea valido
while (tipoVehiculo != 1 && tipoVehiculo != 2 && tipoVehiculo != 3) {
    alert ("seleccion invalida");
    tipoVehiculo = parseInt(prompt("indica: \r 1 para carro  \r 2 para moto \r 3 para autobús"));
}


if (tipoVehiculo == 1) {
    mensaje = 'Carro'
    precioKilometro = tipoCarro
} else if (tipoVehiculo == 2) {
    mensaje = 'Moto'
    precioKilometro = tipoMoto
}else{
    mensaje = 'Autobús'
    precioKilometro = tipoAutobus
}

alert('seleccionaste un vehiculo tipo ' + mensaje)

distanciaRecorrida = parseInt(prompt("Indicanos cuanta distancia recorriste en kilometros (solo numeros)"))
while (isNaN(distanciaRecorrida)) {
    alert("Por favor, ingresa solo números.")
    distanciaRecorrida = parseInt(prompt("Indicanos cuanta distancia recorriste en kilometros (solo numeros)"))
}




if (distanciaRecorrida == 0 || distanciaRecorrida<=25) {
    litrosConsumidos =Math.round(generarNumeroAleatorio(0, 25));
    console.log(litrosConsumidos);
}else if (distanciaRecorrida > 26) {
    litrosConsumidos =Math.round(generarNumeroAleatorio(26, 999));
    console.log('resultado 2 alea:' + litrosConsumidos );
}

if (litrosConsumidos == 0 || litrosConsumidos <= 100){
    extraLitros=5
}else{
    extraLitros = 10
}

alert("Perfecto, a continuación te voy a mostrar el detalle de los cargos a tener en cuenta para calcular el total a pagar.")
alert(`tipo de vehiculo: ${mensaje} \rdistancia recorrida: ${distanciaRecorrida} Km \rprecio por km: ${precioKilometro} MXN \rlitros consumidos: ${litrosConsumidos} \rRecargo por litros consumidos ${extraLitros} MXN`)
// calcular y pintar valores a pagar
totalAPagar = (precioKilometro * distanciaRecorrida) + extraLitros

alert("el total a pagar es: " + totalAPagar +" MXN")

function generarNumeroAleatorio(min , max) {
    return Math.random() * (max - min) + min
}