let calificacion = parseInt(prompt("Por favor ingresa una calificación entre 1 y 10"));
console.log(typeof(calificacion) + " " +calificacion);

if(calificacion>10 || calificacion<1 || !calificacion ){
    alert("el valor ingresado no es compatible con los parametros permitidos")
    console.log(calificacion);
}else if(calificacion<6){
    alert("Reprobado");
}else if (calificacion>=6 && calificacion<=8) {
    alert("Regular");
}else if (calificacion == 9) {
    alert("Bien");
}else{
    alert("Excelente");
}
