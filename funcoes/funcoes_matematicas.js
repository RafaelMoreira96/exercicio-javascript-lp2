export function soma(x, y){
    return x + y
}

export function subtracao(x, y){
    return x - y
}

export function divisao(x, y){
    return x / y
}

export function multiplicacao(x, y){
    return x * y
}

export function calcularVetorNumero(vetor){
    return vetor.reduce((acc, item) => acc + item, 0)
}