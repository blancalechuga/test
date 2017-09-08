//Si la palabra termina en "ar", se le quitan los dos ultimos caracteres.

function platzom(str){
    let translation = str;
    if(str.toLowerCase().endsWith(`ar`)){
        translation = str.slice(0,-2)
    }


//Si la palabra inicia con z, se le añade los caracteres "pe" al final de la 
//palabra

if(str.toLowerCase().startsWith(`z`)){
    translation += `pe`

}



//Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad
// y unir con un guion
let l =str.length;
let minus = str.toLowerCase()
if(minus.length >=10){
    let fHalf =str.slice((l /2));
    let sHalf = str.slice(0, -(l /2));
    translation = `${sHalf}${`-`}${fHalf}`;
}



//Si la palabra original es un palindromo ninguna de las anteriores reglas funcionan y se 
//devuelve la palabra intercambiando entre mayusculas y minusculas
const reverse = (str) => str.split('').reverse().join('');// es igual si ponemos const reverse = fucnntion(){}
function minMay(str){
    const l =str.length;
    let translation = "";
    let capitalize = true;
    for(let i =0; i< l; i++){
        const char = str.charAt(i);
        translation += capitalize ? char.toUpperCase() : char.toLowerCase();

    }
}
if(str = reverse(str)){
    return minMay((str));
}
return(translation);
}
console.log(platzom("contar"));
console.log(platzom("programar"));
console.log(platzom("zorro"));
console.log(platzom("abecedario"));