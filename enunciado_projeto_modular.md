# Atividade: Crie um projeto modular em JavaScript

## Objetivo

Crie, do zero, um pequeno programa em JavaScript organizado em módulos. Você poderá escolher o tema do projeto, como uma biblioteca, uma loja, um jogo, uma escola, animais ou outro assunto combinado com o professor.

O objetivo é praticar a organização do código em arquivos, a criação de funções e classes e o uso de `import` e `export`.

## Organização do projeto

Organize os arquivos em uma estrutura semelhante a esta:

```text
projeto/
├── main.js
├── funcoes/
│   └── funcoes.js
└── models/
    └── nome_do_modelo.js
```

Você pode escolher outros nomes de arquivos, desde que mantenha o código organizado.

## O que o programa deve ter

- Um arquivo dentro de `funcoes/` com pelo menos **três funções** relacionadas ao tema escolhido.
- Uma classe dentro de `models/` que represente algo do tema, como `Livro`, `Produto`, `Jogo`, `Pessoa` ou outra escolha.
- A classe deve ter um construtor e pelo menos **dois métodos**.
- As funções e a classe devem ser exportadas e importadas nos arquivos em que forem utilizadas.
- O arquivo `main.js` deve criar os objetos necessários e **chamar todas as funções e métodos** desenvolvidos.
- Ao executar o `main.js`, o programa deve exibir resultados no console.

## Regras importantes

- O `main.js` deve ser o ponto de entrada do programa.
- As funções devem ser declaradas no módulo de funções, mas chamadas no `main.js`.
- A classe e seus métodos devem ser declarados no módulo de modelos, e seus métodos devem ser chamados no `main.js`.
- Não coloque todo o código em um único arquivo.
- Escolha nomes claros para arquivos, classes, funções e variáveis.

## Entrega

Entregue os arquivos do projeto e demonstre sua execução. Explique brevemente o tema escolhido e a responsabilidade de cada arquivo.