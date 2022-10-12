function multiplicar(){
    var num = document.getElementById('itabuada')
    var resultado = document.getElementById('iproduto')

    if (num.value.length == 0){
        window.alert('[ERRO] Preencha o campo')
    } else{
        var num_convertido = Number(num.value)
        resultado.innerHTML = ''
        for (c = 1; c <=10; c ++){
            var multiplicacao = c * num_convertido
            let item = document.createElement('option')
            item.text = `${num_convertido} x ${c} = ${multiplicacao}`
            resultado.appendChild(item)
        }
    }
}
