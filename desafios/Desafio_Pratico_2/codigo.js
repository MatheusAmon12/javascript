//Capturando todos objetos que irei modificar
let formulario = document.querySelector('#formulario')
let nome = document.querySelector('#inome')
let idade = document.querySelector('#iidade')
let peso = document.querySelector('#ipeso')
let altura = document.querySelector('#ialtura')
let resultado = document.querySelector('#iresultado')
let aviso = document.querySelector('#aviso')
let dadosFicha = document.querySelectorAll('.pessoa')
let botaoEnviar = document.querySelector('#btnEnviar')
let botaoLimpar = document.querySelector('#btnLimpar')

botaoEnviar.addEventListener('click', function(event){
    let vNome = nome.value
    let vIdade = idade.value
    let vPeso = peso.value
    let vAltura = altura.value
    let imc = (vPeso / (vAltura ** 2)).toFixed(1)

    resultado.value = imc
    let situacao = situacaoDoPeso(imc)
    aviso.textContent = situacao

    let pessoa = {
        nome: vNome,
        idade: vIdade,
        peso: vPeso,
        altura: vAltura,
        imc: imc,
        situacao: situacao
    }

    dadosFicha[1].textContent = pessoa.nome
    dadosFicha[2].textContent = pessoa.idade + ' anos'
    dadosFicha[3].textContent = pessoa.peso + ' Kg'
    dadosFicha[4].textContent = pessoa.altura + ' m'
    dadosFicha[5].textContent = pessoa.imc + " " + pessoa.situacao

    event.preventDefault()
})

botaoLimpar.addEventListener('click', function(event){
    dadosFicha[1].textContent = ""
    dadosFicha[2].textContent = ""
    dadosFicha[3].textContent = ""
    dadosFicha[4].textContent = ""
    dadosFicha[5].textContent = ""
    aviso.textContent = ""
})

function situacaoDoPeso(n){
    if (n < 16){
        return 'Magreza Grau III'
    } else if (n < 16.9){
        return 'Magreza Grau II'
    } else if (n < 18.4){
        return 'Magreza Grau I'
    } else if (n < 24.9){
        return 'Adequado'
    } else if (n < 29.9){
        return 'Pré-Obeso'
    } else if (n < 34.9){
        return 'Obesidade Grau I'
    } else if (n < 39.9){
        return 'Obesidade Grau II'
    } else{
        return 'Obesidade Grau III'
    }
}
