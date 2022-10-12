var num = document.getElementById('inumero')
var mostrar = document.getElementById('ilista')
var lista = []
var soma = 0

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, lista)){
        let n = Number(num.value)
        lista.push(n)
        let item = document.createElement('option')
        item.text = `O número ${n} foi adicionado.`
        mostrar.appendChild(item)
        num.value = ''
        num.focus()
    }else{       
        window.alert('Digite um valor válido!')
    }
}

function finalizar(){
    let resultado = document.getElementById('resultado')
    let maior = lista[0]
    let menor = lista[0]
    
    if(lista.length == 0){
        alert('Lista vazia, adicione valores!')
    } else{
        for (let c = 0; c < lista.length; c++){
            soma += lista[c]

            if (lista[c] > maior){
                maior = lista[c]
            }
            if (lista[c] < menor){
                menor = lista[c]
            }
        }
        num.value = ''
        num.focus()

        resultado.innerHTML = `<p>Ao todo, foram cadastrados ${lista.length} números.</p>`
        resultado.innerHTML += `<p>O maior número cadastrado é ${maior}</p><p>O menor número cadastrado é ${menor}</p>`
        resultado.innerHTML += `<p>A soma de todos valores é ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valores cadastros é ${soma / lista.length}</p>`
    }    
}