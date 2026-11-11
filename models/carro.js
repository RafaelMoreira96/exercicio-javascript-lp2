export class Carro {
    constructor(marca, modelo, tipoMotor, ano, versao, cilindradas){
        this.marca = marca
        this.modelo = modelo
        this.tipoMotor = tipoMotor
        this.ano = ano
        this.versao = versao
        this.cilindradas = cilindradas
    }

    visualizarInformacoesTecnicas(){
        console.log(
            "Nome do Carro: " + this.modelo + " " + this.marca
        )
    }
}