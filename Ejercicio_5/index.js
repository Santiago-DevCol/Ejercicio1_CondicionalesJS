let num1= prompt("ingresa el primer valor");
let num2= prompt("ingresa el segundo valor");

num1 = parseInt(num1);
num2 = parseInt(num2)
if (num1 < num2) {
    alert(num1 + " es menor a " + num2);
}else if (num2 < num1) {
    alert(num2 + " es menor a " + num1);
}else{
    console.log(num1 + " es igual a " + num2);
}