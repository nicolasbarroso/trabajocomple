const piedra = 1;
const papel = 2;
const tijera = 3;
//Ingreso de opciones
let usuario = parseInt(prompt("Ingrese un número: 1 para piedra, 2 para papel o 3 para tijeras"));
//realizaciñon de la operación
let pc = Math.floor(Math.random() * (4 - 1)) + 1;
function juego (usuario, pc){
    switch (true) {
        case (usuario === pc):
            alert("¡Empate!");
            break;
        case ((usuario === 1 && pc === 3) ||
        (usuario === 2 && pc === 1) ||
        (usuario === 3 && pc === 2)):
            alert("¡Ganaste!")
            break;
        default:
            alert("¡Perdiste!")
            break;
    }
    
}
//Imprime resultado

juego(usuario, pc);
console.log(usuario);
console.log(pc);