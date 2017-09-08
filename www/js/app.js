var altura = 7;
var base = 5;
var area = base * altura; 
console.log("El area de mi rectangulo es igual: " + area);


var altura = 7;
var base = 5;
var area = base * altura;
var areatria = (base * altura ) /2;
console.log("El area de mi triangulo es igual: " + areatria);

//El area de mi triangulo es igual: 17.5

var radio = 4;
var radiov = (radio * radio);
var pi = 3.1416;
var area = (pi * radiov);
console.log("El area de mi circulo es igual:" + area);
//El area de mi circulo es igual:50.2656

var radio = 5;
var radiov = ((radio * radio)*radio);
var pi =3.1416
var volumen = 4/3;
var volumenfinal = ((volumen * pi) * radiov);
console.log ("El volumen de mi esfera es igual : " + volumenfinal);
//El volumen de mi esfera es igual : 523.5999999999999



var myvar = "Blanca Lechuga";
function myFunction(){
   alert(myvar); 
  
}
console.log("Hola, " + myvar);

var nombre = "Blanca";

function saludar(){
    if (true){
        var nombre = "Eric";
    }
    console.log(`Hola ${nombre}`);
}

function saludar10(){
    let i=0;
    for(i; i<10; i++){
        console.log(`Hola ${nombre}`);
    }
    console.log(`El valor de i es ${i}`)
}