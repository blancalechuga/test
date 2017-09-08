let vidaGoku = 100;
let vidaSuperMan = 100;

const MIN_POWER =5;
const MAX_POWER = 12;

let round = 0;

const gokuSigueVivo = ()=> vidaGoku > 0

const ambosSiguenVivos = ()  => vidaGoku > 0 && vidaSuperMan > 0
const ambosMuertos = ()=> vidaGoku === 0 && vidaSuperMan ===0

const calcularGolpe = ( ) => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

while(ambosSiguenVivos()){
    round ++;
    console.log(`Round ${round}`);

    const golpeGoku = calcularGolpe();
    const golpeSuperMan = calcularGolpe();
    if(golpeGoku > golpeSuperMan){
        console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`)
        vidaSuperMan -= golpeGoku
        console.log(`Superman queda en ${vidaSuperMan} de vida`)
    }else{
        console.log(`Superman ataca a Goku con un golpe de ${golpeSuperMan}`)
        vidaGoku -= golpeSuperMan
        console.log(`Goku queda en ${vidaGoku} de vida`)    
    }
}

if(gokuSigueVivo()){
    console.log(`Goku gano la pelea. su vida es de : ${vidaGoku}`)
}else{
    console.log(`Superman gano la pelea. Su vida es ${vidaSuperMan}`)
}