let nombrePlanetas = ['tierra', 'marte'];
let distancia = [6, 3];
const tamanio = [];

for (let i = 0; i < nombrePlanetas.length; i++) {
    console.log(nombrePlanetas[i])
}

for (const key in distancia) {
    if(distancia[key]==="5"){
        console.log("Se encontró la distancia")
    } else {
        console.log("No se encontró la distancia")
    }
}
