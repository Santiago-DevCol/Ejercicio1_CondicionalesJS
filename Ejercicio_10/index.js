//definimos las constantes para el nivel educativo a cursar
const course = 4999
const carrera = 3999
const master = 2999

//definimos las constantes para aplicar descuento por beca
const becaFacebook = 20
const becaGoogle = 15
const becaJesua = 50

//definimos la duracion de los niveles
let duracionNivel = null


//variables para operar el sistema
let totalAPagar = 0
let selectNivelEstudio = null
let deseoBeca = null
let selectBeca = 0
let operacionDescuento = null


// inicio del sistema
alert("Bienvenido a ProTalento!");
let validarDeseoEstudiar = prompt("¿Estas interesado en aplicar a nuestros programas?").toUpperCase()
let mensaje = null
let mensajeBeca = null

if (validarDeseoEstudiar != "SI") {
    alert("Gracias por su visita vuelva pronto! 🙂 ")
    location.reload('/Ejercicio_9/index.html')
}else{
    alert("Perfecto, te mostrare nuestros niveles de estudio para que selecciones una opción");
    alert('Selecciona: \r 1 para ver el nivel Curso  \r 2 para ver el nivel Carrera \r 3 para ver el nivel Master');
    selectNivelEstudio = parseInt(prompt("Indica tu selección"));
    
    while (selectNivelEstudio != 1 && selectNivelEstudio != 2 && selectNivelEstudio != 3) {
        alert("Selección invalida");
        selectNivelEstudio = parseInt(prompt("Indica tu selección"));
    }
    
    if (selectNivelEstudio == 1){
        mensaje = 'Curso'
        duracionNivel= 2
        totalAPagar = course
    }else if (selectNivelEstudio == 2 ) {
        mensaje = 'Carrera'
        duracionNivel = 6
        totalAPagar = carrera
    }else{
        mensaje = 'Master'
        duracionNivel = 12
        totalAPagar = master
    }

    alert("Seleccionaste el nivel " + mensaje);

    alert("Ahora que ya sabes tu carrera queremos saver si quieres una beca");
    
    deseoBeca = prompt("responde Si o No si deseas una Beca").toUpperCase();

    let totalAPagarFinal = null

    if (deseoBeca != "SI"){
        totalAPagarFinal =  Math.round(totalAPagar * duracionNivel)
        alert('Comprendo, te dare el detalle de lo que vas a pagar si deseas no aplicar a una de las becas.')
        alert(`La duracion del nivel ${mensaje} es de ${duracionNivel} meses. \rValor del mes sin descuento: ${totalAPagar} MXN \rEl valor final del nivel es: ${totalAPagarFinal} MXN` )
        
    } else{
        alert('Selecciona: \r 1 para obtener la beca Facebook  \r 2 para obtener la beca Google \r 3 para obtener la beca Jesua');
        selectBeca = parseInt(prompt("Indica tu selección"))
        
        while (selectBeca != 1 && selectBeca != 2 && selectBeca != 3) {
            alert("Selección invalida");
            selectBeca = parseInt(prompt("Indica tu selección"));
        }
        
        if (selectBeca == 1) {
            mensajeBeca ='Beca Facebook'
            operacionDescuento = (Math.floor(becaFacebook * totalAPagar)/100)
            //console.log(operacionDescuento);
            
            totalAPagar = parseFloat(totalAPagar - operacionDescuento)
            //console.log(totalAPagar);
        } else if (selectBeca == 2) {
            mensajeBeca ='Beca Google'
            
            operacionDescuento = (Math.floor(becaGoogle * totalAPagar)/100)
            
            totalAPagar = parseFloat(totalAPagar - operacionDescuento)
        } else{
            mensajeBeca ='Beca Jesua'
            
            operacionDescuento = (Math.floor(becaJesua * totalAPagar)/100)
            
            totalAPagar = parseFloat(totalAPagar - operacionDescuento)
        }
        totalAPagarFinal = Math.round(totalAPagar * duracionNivel);

        alert("Seleccionaste la beca: " + mensajeBeca + "\rla cual te da un descuento de: " + operacionDescuento +" MXN");

        alert(`La duracion del nivel ${mensaje} es de ${duracionNivel} meses. \rValor del mes con descuento: ${totalAPagar} MXN \rEl valor final del nivel es: ${totalAPagarFinal} MXN` )
    }
}