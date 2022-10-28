let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('#formulario')
let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

let cxNum1 = document.querySelector('#in1')
let cxNum2 = document.querySelector('#in2')
let cxMedia = document.querySelector('#imedia')
let cxSituacao = document.querySelector('#isituacao')

function calcMedia(n1, n2){
    return (n1 + n2) / 2
}

function situacaoFinal(mediaFinal){
    let situacaoFinal = ''

    if (mediaFinal >= 7){
        situacaoFinal = 'Aprovado(a)'
    } else if (mediaFinal <= 3){
        situacaoFinal = 'Reprovado(a)'
    } else{
        situacaoFinal = 'Recuperação'
    }
    return situacaoFinal
}

function formatarCxSituacao(situacaoFinal){
    switch(situacaoFinal){
        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            break
        case 'Reprovado(a)':
            cxSituacao.classList.add('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.remove('aprovado')  
            break
        case 'Recuperação':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao')
            cxSituacao.classList.remove('aprovado')
            break  
    }
}

function validarNumero(numero){
    let num_1 = cxNum1.value 
    let num_2 = cxNum2.value

    if(num_1 < 0 || num_1 > 10 || num_2 < 0 || num_2 > 10){
        formulario.reset()
        aviso.textContent = 'ERRO! Digite valores entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function(){//função interna que recebe como parâmetro uma função anônima que será executada por um período de tempo determinado, 1000 = 1s, 2000 = 2s... (flash message)
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 3000)
    }
}

btnEnviar.addEventListener('click', function(event){
    let nota_1 = parseFloat(cxNum1.value)
    let nota_2 = parseFloat(cxNum2.value)
    let media = calcMedia(nota_1, nota_2)
    
    if(isNaN(media) || media < 0){
        cxSituacao.value = ''
    } else{
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarCxSituacao(situacaoFinal(media))
    }
    event.preventDefault()
})

btnLimpar.addEventListener('click', function(){
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
    cxSituacao.value = ''
})