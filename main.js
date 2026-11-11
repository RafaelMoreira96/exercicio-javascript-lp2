import { soma } from './funcoes/funcoes_matematicas.js'
import { Carro } from './models/carro.js'

function main(){
    let carro = new Carro("Ferrari", "Enzo", "V7", 2012, "Gasolina", 1000)
    carro.visualizarInformacoesTecnicas()
}

main()
