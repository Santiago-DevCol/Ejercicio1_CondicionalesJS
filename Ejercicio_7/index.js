let diaSemana = prompt("Indica un día de la semana");

if (diaSemana.toUpperCase() == 'LUNES'){
    alert("Hola mundo es hoy es: " + diaSemana);    
}else if (diaSemana.toUpperCase() == 'VIERNES'){
    alert("Ya estamos a " + diaSemana + " Siiii!!!") ;
}else if (diaSemana.toUpperCase() == 'SABADO' || diaSemana.toUpperCase() == 'DOMINGO') {
    alert("Llego el momento de descansar porque hoy es " +  diaSemana)
}else{
    alert("hoy va a ser un gran día!");
}

