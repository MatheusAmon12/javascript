let titulo = document.querySelector('#titulo')
titulo.textContent = 'DOM'

let testando = document.querySelectorAll('.box')
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)

let testeTag = document.getElementsByTagName('div')//gera um array com as tags, para acessar cada uma usamo testeTag[0], por exemplo
let testeID = document.getElementById('titulo')
let testeClass = document.getElementsByClassName('box')//também gera um array

//Para alterar o conteúdo HTML basta usar o textContent, exemplo:
testeTag[0].textContent = 'Este conteúdo foi alterado pelo textContent'