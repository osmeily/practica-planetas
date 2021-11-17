let nombrePlanetas = ['tierra', 'marte'];
let distancia = [6, 3];
const tamanio = [];
let i = 0;
while(i <=nombrePlanetas.length-1){
    console.log(i);
    console.log(nombrePlanetas[i]);
    i++
}

for (let index = 0; index < nombrePlanetas.length; index++) {
    console.log(nombrePlanetas[index])
}

for (const planeta of nombrePlanetas) {
    console.log(planeta)
}

for (const key in distancia) {
    if(distancia[key]==="5"){
        console.log("Se encontró la distancia")
    } else {
        console.log("No se encontró la distancia")
    }
}

nombrePlanetas.forEach((value,index,array) => {
    console.log("planeta", index, value)
})

let resultadoMap = nombrePlanetas.map((planetas, index)=> {
    return ('El planeta ${planetas} tiene tamaño de : ${tamaño[index]}')
}
)
console.log(resultadoMap)
