let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll('box')

function olaMundo(){
    document.write('Olá mundo sem retorno<br>')
}

function olaMundo2(){
    return 'Olá mundo com retorno<br>'
}

olaMundo()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'Jesus Cristo é o Salvador'

function somar(num1 = 0, num2 = 0){
    document.write((num1 + num2) + '<br>')
}

function somar2(num3 = 0, num4 = 0){
    return num3 + num4
}

somar(x, y)
somar(20, 34)

document.write(`<p>${somar2(x, y)}</p>`)
document.write(`<p>${somar2(23, 90)}</p>`)

titulo.addEventListener('click', function(){
    console.log('Clicou no título')
})

const olaMundoArrow = () => document.write('Olá, Mundoooooooo!!!')
const olaMundoArrow2 = () => '<p>Olá mundo com arrow function</p>'

olaMundoArrow()
document.write(olaMundoArrow2())