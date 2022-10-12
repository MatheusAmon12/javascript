function contar(){
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = '[ERRO] Impossível contar! Preencha todos os campos.'
        resultado.style.color = 'red'
        resultado.style.fontWeight = 'bold'
    } else{
        resultado.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p == 0){
            window.alert('[ERRO] Passo inválido, considerando 1.')
            p = 1
        }

        if (i >= f){
            for (var c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} `
            }
        } else{
            for (var c = i; c <= f; c += p){
                resultado.innerHTML += `${c} `
            }
        }     
    } 
}