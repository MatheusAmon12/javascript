let titulo = document.querySelector('h1')
titulo.textContent = 'DOM - Manipulando CSS'

let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'imagens/logo.png')
imagem.setAttribute('width', '300px')

titulo.style.color = '#E44D26'//uma abordagem ideal para configurações pontuais


let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'degrade')// uar esta abordagem quando a quantidade de atributos setados for grande, assim, em uma linha de código é possível fazer várias configurações

let tela = document.querySelector('.tela_principal')
let btnLight = document.querySelector('#btlight')
let btnDark = document.querySelector('#btdark')

btnDark.addEventListener('click', modoDark)//este é o escutador de eventos, nele passsamos o parâmetro com o evento que será escutado e a função que será executada quando ocorrer o evento
btnLight.addEventListener('click', modoLight)

function modoDark(){
    console.log('modo dark')//apenas para mostrar em qual modo está no console
    tela.classList.add('dark');//adicona na lista de classes o dark, ao invés de setar um novo atributo classe
    tela.classList.remove('light');//remove da lista de classes o light
}

function modoLight(){
    console.log('modo light')
    tela.classList.remove('dark');
    tela.classList.add('light');
}