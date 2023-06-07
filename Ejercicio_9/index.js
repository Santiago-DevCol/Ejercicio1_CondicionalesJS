const sinTopping = 50
const oreo = 10
const kitKat = 15
const brownie = 20




alert("Bienvenido a helados M&M 🍨 ");
let validarDeseoCompra= prompt("¿Deseas comprar un helado?").toUpperCase()
let totalCompra = 0

if (validarDeseoCompra != "SI") {
    alert("Gracias por su visita vuelva pronto! 🙂 ")
    location.reload('/Ejercicio_9/index.html')
}else{
    alert("Perfecto, te mostrare nuestra lista de toppings para que selecciones una opción")
    alert('Selecciona: \r 1 para un helado sin topping \r 2 para oreo \r 3 para kitkat \r 4 para acompañar con brownie')
    let selectTopping = parseInt(prompt("Indica tu selección"));

    if (selectTopping == 1 ) {
        totalCompra = sinTopping;
        alert ("El valor a pagar es: " + totalCompra + " MXN"  )
    }else if (selectTopping == 2) {
        totalCompra = sinTopping + oreo
        alert ("El valor a pagar es: " + totalCompra + " MXN  \r Valor helado: " + sinTopping + " MXN \r Valor topping: "+ oreo+" MXN" )
    } else if(selectTopping == 3){
        totalCompra= sinTopping + kitKat
        alert ("El valor a pagar es: " + totalCompra + " MXN  \r Valor helado: " + sinTopping + " MXN \r Valor topping: "+ kitKat+" MXN" )
    }else if(selectTopping == 4){
        totalCompra = sinTopping + brownie
        alert ("El valor a pagar es: " + totalCompra + " MXN  \r Valor helado: " + sinTopping + " MXN \r Valor topping: "+ brownie+" MXN" )
    }
    else{
        alert("no tenemos este topping, lo sentimos \r el total a pagar es: " + sinTopping + " MXN por un helado sin topping")
        //alert("El topping seleccionado no está disponible \r el total a pagar es: " + sinTopping + " MXN")
    }
}
