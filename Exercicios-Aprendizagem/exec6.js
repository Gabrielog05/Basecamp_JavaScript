function bhaskara (ax2, bx, c){
    let resultado = []
    let delta = (bx **2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    }
    else if (delta > 0) {
        return "Delta é positivo"
    }
    let x = (-bx + Math.sqrt(delta)/(2*ax2))
    let y = (-bx - Math.sqrt(delta)/(2*ax2))
    resultado.push(x)
    resultado.push(y)
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))