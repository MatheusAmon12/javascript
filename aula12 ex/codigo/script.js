function carregar(){
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são <strong>${hora} horas</strong>`
    if (hora >= 0 && hora < 12){
        imagem.src = 'imagens/manha.png'
        document.body.style.background = '#FBA85E'
        msg.innerHTML += '<br><strong>Bom dia!</strong>'

    }else if (hora >= 12 && hora < 18){
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#BC6144'
        msg.innerHTML += '<br><strong>Boa tarde!</strong>'
    }else{
        imagem.src = 'imagens/noite.png'
        document.body.style.backgroundd = '#130A1D'
        msg.innerHTML += '<br><strong>Boa noite!</strong>'
    }
}
