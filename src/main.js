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
    let contador=0;
    do {
        if(numero % i == 0){
            contador += 1;
        }
        i++;
    }while(i<=numero);
    return contador;
}
elevar(numero, potencia){
    let i,total=numero;
    for(i=1; i<potencia; i++){
        total = total*numero;
    }
    return total;
}
}
let app = new App();
console.log("Funcion factorial de un numero: ");
console.log(app.factorial(5));
console.log("");
console.log("Funcion convertir numero a string: ");
console.log(app.convertirAString(5));
console.log("");
console.log("Funcion entre cuantos numeros es divisible un numero: ");
console.log(app.obtenerDivisibles(5));
console.log("");
console.log("Funcion que eleve cualquier numero a cualquier potencia: ");
console.log(app.elevar(5,5));