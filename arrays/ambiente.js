let produtos = ['aveia', 'frango', 'arroz', 'massa']

//adicionar valores no final
produtos.push('granola')
produtos.push('90') //adicionado propositalmente para aplicar o próximo método
console.log(produtos)

//remover do final
produtos.pop()
console.log(produtos)

//adicionar no início do array
produtos.unshift('batata-doce', 'café') //nesse caso o primeiro ocupará o indice 0 e o segundo o indice 1
console.log(produtos)

//remover do início do array
produtos.shift()
console.log(produtos)

//remover de uma posição específica
produtos.splice(2, 3) //o primeiro parâmetro indica em qual posição iniciará a remoção, o segundo indica quantos itens serão removidos
console.log(produtos)

//copiar arrays
let produtos1 = produtos.slice() //uar o método sem passar parâmetros copia o array por inteiro
console.log(produtos1)

let produtos2 = produtos.slice(1, 3) //o primeiro parâmetro indica onde iniciará a cópia, o segundo indica o final, nesse exemplo colocar o 3 representa copiar os indices 1 (inicio) e 2, seria uma cópia do início até n-1
console.log(produtos2)

//copiar arrays com spreed operator
let produtos3 = [...produtos, 'leite', 'achocolatado'] //o spreed é um operador representado pelas retiscências (...), basta inserir logo após as ... o array que será copiado, em seguida pode-se completar o novo vetor com outros elementos, o resultado é a junção do vetor copiado com os novos itens
console.log(produtos3)