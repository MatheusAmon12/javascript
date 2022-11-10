let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#numSorteado')
let audioDadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function(){
    imgDado.classList.add('animacao')
    sorteado.classList.add('aparecer')

    audioDadoRolando.play()

    btnSortear.style.display = 'none'

    setTimeout(function(){
        numeroSorteado = gerarNumeroAleatorio(1, 6)

        imgDado.setAttribute('src','../midia/imagens/5.jpg')

        sorteado.textContent = numeroSorteado

        btnSortear.style.display = 'inline-block'

        imgDado.classList.remove('animacao')
        sorteado.classList.remove('aparecer')
    }, 1750)
})

function gerarNumeroAleatorio(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}