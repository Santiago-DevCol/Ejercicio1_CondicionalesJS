let numberPar = prompt("Ingresa un numero para validar si es par o impar");

numberPar = parseInt(numberPar);

if ((numberPar % 2) == 0) {
    alert(numberPar + " Es par");
} else {
    alert(numberPar + " Es impar");
}