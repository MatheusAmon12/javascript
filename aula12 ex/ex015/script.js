function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var resultado = document.getElementById('resultado')
    if (Number(fano.value.lenght) == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'crianca-homem.png')
            } else if (idade < 21){
                img.setAttribute('src', 'crianca-homem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'homem-adulto.png')
            } else{
                img.setAttribute('src', 'idoso.png')
            }
            
        } else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'crianca-mulher.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 50){
                img.setAttribute('src', 'mulher-adulta.png')
            } else{
                img.setAttribute('src', 'idosa.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        resultado.appendChild(img)
    }

}