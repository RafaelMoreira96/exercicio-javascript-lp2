/**
 * Quando o valor de booleano for verdadeiro (true), o filtro pegará todos os valores
 * acima do valorBase. Do contrário, pegará os valores abaixo do valorBase.
 */
export function filtrarValoresPorBase(vetorDeNumero, valorBase, booleano){
    let result = []
    if(booleano){
        result = vetorDeNumero.filter(item => item > valorBase)
    } else {
        result = vetorDeNumero.filter(item => item < valorBase)
    }
    return result
}