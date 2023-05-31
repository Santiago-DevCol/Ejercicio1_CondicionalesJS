let num1 = parseInt(prompt("ingresa el primer valor"));
let num2 = parseInt(prompt("ingresa el segundo valor"));
let num3 = parseInt(prompt("ingresa el tercer valor"));

if(num1 == num2 || num1 == num3 || num2 == num3){
    console.log("Hay al menos dos números iguales.");
if (num1 > num2 && num1 > num3) {   
    console.log("El primer número (" + num1 + ") es el mayor.");
    } else if (num2 > num1 && num2 > num3) {
        console.log("El segundo número (" + num2 + ") es el mayor.");
    } else if (num3 > num1 && num3 > num2) {
        console.log("El tercer número (" + num3 + ") es el mayor.");
    } else{
        console.log("todos son iguales");
    }
}   