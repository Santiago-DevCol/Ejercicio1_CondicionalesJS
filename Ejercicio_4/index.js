const valueWinner = 1000

let numberCliente = prompt("indicame tu numero de cliente");
numberCliente = parseInt(numberCliente);

if (numberCliente != valueWinner) {
    alert("Lo sentimos, sigue participando")
}else{
    alert("ganaste un premio!!")
}