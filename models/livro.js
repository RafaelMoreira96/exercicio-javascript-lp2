export class Livro {
    constructor(nome, autor, num_paginas, qtd_capitulos, faixa_etaria, genero, editora){
        this.nome = nome
        this.autor = autor
        this.num_paginas = num_paginas
        this.qtd_capitulos = qtd_capitulos
        this.faixa_etaria = faixa_etaria
        this.genero = genero
        this.editora = editora
    }

    informacoesRapidas(){
        console.log(this.nome + " " + this.autor)
    }
}