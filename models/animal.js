export class Animal {
    constructor(nome, idade, especie){
        this.nome = nome
        this.idade = idade
        this.especie = especie
        
    }

    // getters e setters
    getNome(){
        return this.nome
    }

    setNome(nome){
        this.nome = nome
    }

    getIdade(){
        return this.idade
    }

    setIdade(idade){
        this.idade = idade
    }

    getEspecie(){
        return this.especie
    }

    setEspecie(especie){
        this.especie = especie
    }

    toString(){
        return `Animal: ${this.nome}, Idade: ${this.idade}, Espécie: ${this.especie}`
    }
}