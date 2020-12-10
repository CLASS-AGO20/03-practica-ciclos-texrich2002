export default class App {
factorial(numero){
    let i,total=0;
    for(i=numero; i=0; i--){
        total = i*i;
    }
    return total;


}

}
let app = new App();
console.log("Factorial de un numero: ");
console.log(app.factorial(5));
console.log("");
