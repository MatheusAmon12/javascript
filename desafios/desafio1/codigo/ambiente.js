let nome = 'MATHEUS FERREIRA'
let nacionalidade = 'BRASILEIRO'
let idade = 22
let peso = 88.8
let altura = 1.86

document.write (`<div class="container">
                    <h1 class="titulo">Lutador</h1>
                    <div id="img">
                        <img src="imagens/lutador.jpg" alt="lutador" id="imagem">
                    </div>
                    <div class="dados" id="nome">
                        <p>${nome}</p>
                    </div>
                    <div class="dados" id="nacionalidade">
                        <p>${nacionalidade}</p>
                    </div>
                    <div class="dados" id="idade">
                        <p>${idade} anos</p>
                    </div>
                    <div class="dados" id="peso">
                        <p>${peso} Kg</p>
                    </div>
                    <div class="dados" style="margin-bottom: 25px;" id="altura">
                        <p>${altura} m</p>
                    </div>
                </div>`)

//Parte II
let data = new Date()
let dia = data.getDay()
let mes = data.getMonth()
let ano = data.getFullYear()

document.write (`<div class="papel">
                    <h1 id="titulo">Frase do dia</h1>
                    <p id="data">${dia}/${mes}/${ano}</p>
                    <p id="txt">"Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade."</p>
                    <p id="autor">Aaron Swartz</p>
                </div>
`)

//Parte III
let meses = ['Janeiro', ' Fevereiro', ' Março', ' Abril', ' Maio', ' Junho', ' Julho', ' Agosto', ' Setembro', ' Outubro', ' Novembro', ' Dezembro']

document.write(`<div id = 'fundo'>
                    <h1 id='titulo_2'>Array de Meses do Ano</h1>
                    <p id='meses'>${meses}</p>
                </div>
`)

//Parte IV
let titulo = "Assassins Creed IV"
let desenvolvedor = 'Ubsoft'
let anoLancamento = 2013

document.write (`<div id='cartao'>
                        <h1 id='titulo_jogo'>Jogo</h1>
                        <label for='titulo'>Título</label>
                        <div class='entrada'>
                            <p name='titulo' class='texto_jogo'>${titulo}</p>
                        </div>
                        <label for='desenv'>Desenvolvedor</label>
                        <div class='entrada'>
                            <p name='desenv' class='texto_jogo'>${desenvolvedor}</p>
                        </div>
                        <label for='ano'>Ano de lançamento</label>
                        <div class='entrada'>
                            <p name='ano' class='texto_jogo'>${anoLancamento}</p>
                        </div>
                    </div>`)

