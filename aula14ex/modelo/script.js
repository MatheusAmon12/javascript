function contar(){
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var resultado = document.getElementById('resultado')

    c = Number.parseInt(inicio.value)
    f = Number.parseInt(fim.value)
    p = Number.parseInt(passo.value)
    
    if (c == NaN){
        resultado.innerHTML = 'Impossível contar!'
    }else if (f == NaN){
        resultado.innerHTML = 'Impossível contar!'
    }else if (p == 0){
        window.alert('Não é possível realizar contagem com passo iagual a 0, considerando passo igual a 1.')
        do {
            resultado.innerHTML += `${c} `
            c += 1
        } while (c <= f)
    }else{
        do {
            resultado.innerHTML += `${c} `
            c += p
        } while (c <= f)
    }
}