let pessoa = {
    nome: 'Matheus',
    idade: 22,
    peso: 83.5,
    altura: 1.75,
    maior_idade: true
}

let produtos = {
    descricao: [],
    preco: []
}

const carros = {
    marca: ['Ford', 'Fiat', 'GM'],
    modelo: ['Ka', 'Uno', 'Corsa'],
    ano: [1999, 2005, 2010]
}

//acessar propriedades/atributos/key usando .
console.log(`${pessoa.nome} tem ${pessoa.idade} anos, pesa ${pessoa.peso}Kg e tem ${pessoa.altura}m de altura.`)

//acessar propriedades/atributos/key usando ['']
console.log(`${pessoa['nome']} tem ${pessoa['idade']} anos, pesa ${pessoa['peso']}Kg e tem ${pessoa['altura']}m de altura.`)

//operação as propriedades, cálculo de IMC
let imc = pessoa.peso / (pessoa['altura'] * pessoa.altura)
console.log(imc.toFixed(2))

//alterar/atualizar valores das propriedades
pessoa.nome = ['Matheus Amon']
console.log(pessoa.nome)

produtos.descricao = ['Arroz'] /*nesse caso o obejto produtos está vazio, então fazer isso resultado em uma inserção, 
mas se feita numa segunda vez os dados anteriores serão sobrescritos, pois como dentro da key existe um array a posição 
de inserção sempre será o índice 0. Para contornar basta usar o spreed*/
produtos.preco = [19.99]
console.log(produtos)

//aplicando o spreed operator
produtos.descricao = [produtos.descricao, ['Feijão']]
produtos.preco = [produtos.preco, [9.89]]
console.log(produtos)


//spreed em objetos const
carros.marca = [...carros.marca, 'WV']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano = [... carros.ano, '1979']
console.log(carros)
