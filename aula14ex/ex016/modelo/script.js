function contar(){
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var resultado = document.getElementById('resultado')

    c = inicio.value
    f = fim.value
    p = passo.value

    /*for (c = inicio; c <= fim; c = c + passo){
        resultado.innerHTML = "<p>A contagem é ${c.value}</p>"
    }*/

    while (c <= f){
        resultado.innerHTML += c
        c += p
    }
}