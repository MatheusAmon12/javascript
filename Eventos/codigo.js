function carregou(){
    console.log('Página carregada com sucesso!')
}

function roulouPagina(){
    console.log('Rolou a página.')
}

function focou(){
    console.log('Focou no título!')
}

function focoNoCampo(){
    console.log('Focou no campo!')
}

function semFocoNoCampo(){
    console.log('O foco saiu do campo!')
}

let letras = document.querySelector('input[type=text]')
function avisarQueTeclou(){
    let numLetras = 1
    console.log('Está teclando ' + (letras.value.length + numLetras))
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

botao1.addEventListener('mouseover', function(){
    console.log('Foco no botão 1')
})
botao2.addEventListener('blur', function(){
    console.log('Sem foco no botão 2')
})
botaoEnviar.addEventListener('click', function(event){
    event.preventDefault()
    console.log('Clicou no botão enviar!')
})