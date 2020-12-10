export default class App {
factorial(numero){
    let i,total=1;
    for(i=1; i<=numero; i++){
        total = total*i;
    }
    return total;
}
convertirAString(numero){
    let i=numero;
    let string = "";
    while(i > 0){
        string += '*';
        i--;
   }
   return string;
}
obtenerDivisibles(numero){
    let i=1;
    do {
        if(i % 3 == 0)
            string += i.toString();

        i++;
    }while(i<=numero);
}

}
let app = new App();
console.log("Factorial de un numero: ");
console.log(app.factorial(5));
console.log("");
console.log("Convertir numero a string: ");
console.log(app.convertirAString(5));
console.log("");