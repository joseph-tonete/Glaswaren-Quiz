let nomes = [
['tubodeensaio', 'Tubo de ensaio'
],['becker', 'Becker'
],['erlemnmeyer', 'Erlemnmeyer'
],['balaodefundochato', 'Balão de fundo chato'
],['balaodefundoredondo', 'Balão de fundo redondo'
],['balaodedestilacao', 'Balão de destilação'
],['pipetavolumetrica','Pipeta volumétrica'
],['pipetagraduada','Pipeta graduada'
],['proveta','Proveta'
],['funildevidro','Funil de vidro'
],['frascodereagentes', 'Frasco de reagentes'
],['tripedeferro', 'Tripé de ferro'
],['teladeamianto','Tela de amianto'
],['cadinhodeporcelana','Cadinho de porcelana'
],['pincademadeira','Pinça de madeira'
],['estanteparatubos','Estante para tubos de ensaio'
],['triangulodeporcelana','Triângulo de porcelana'
],['bicodebunsen','Bico de Bunsen'
],['funildedecantacao','Funil de decantação'
],['almofarizepistilo','Almofariz e pistilo'
],['placadepetri','Placa de Petri'
],['limatriangular','Lima triângular'
],['pesafiltros','Pesa-filtros'
],['pisseta','Pisseta'
],['cubadevidro','Cuba de vidro'
],['capsuladeporcelana','Cápsula de porcelana'
],['vidroderelogio','Vidro de relógio'
],['dessecador','Dessecador'
],['bureta','Bureta'
],['balaovolumetrico','Balão volumétrico'
],['frascolavador','Frasco lavador'
],['funildebuchner','Funil de Buchner'
],['kitassato','Kitassato'
],['picnometro','Picnômetro'
],['suporteuniversal','Suporte universal'
],['anelparafunil','Anel para funil'
],['mufa','Mufa'
],['tompadevacuo', 'Tompa de vácuo'
],['garrametalica','Garra metálica'
],['tuboemu','Tubo em U'
],['pincametalica','Pinça metálica'
],['escovadelimpeza','Escova de limpeza'
],['pincademohr','Pinça de Mohr'
],['termometro','Termômetro'
],['varadevidro','Vara de vidro'
],['bastaodevidro','Bastão de vidro'
],['furadorderolha','Furador de rolha'
],['kipp','Kipp'
],['espatula','Espátula'
],['pincadehoffman','Pinça de Hoffman'
],['pera','Pêra'
],['condensador', 'Condensador']]


let sorteados = []
let musicadojogo
let imgjogo = document.getElementById('imgjogo')
let botao1 = document.getElementById('botao1')
let botao2 = document.getElementById('botao2')
let botao3 = document.getElementById('botao3')
let botao4 = document.getElementById('botao4')
let certas = document.getElementById('certas')
let erradas = document.getElementById('erradas')
let contagem = document.getElementById('contagem')
let corretas = 0
let erroneas = 0
let j = 0

let situacaodamusica = true
let botaomusica = document.getElementById('botaomusica')
let situacaodosefeitos = true
let botaoefeitos = document.getElementById('botaoefeitos').style
let situacaodohardcore = false
let botaohard = document.getElementById('botaohardcore')

function jogar(){
    recomecar()
    for(a = 0; a < nomes.length; a++){sorteados.push(a)}
    sorteados = sorteados.sort(function() {return Math.random() - 0.5})
    sorteiodasquestões()
    document.getElementById('menu').style.display = 'none'
    document.getElementById('jogo').style.display = 'block'
    musicadojogo = new Audio('sons/musica-quimica.mp3')
    musicadojogo.setAttribute('id', 'musica')
    document.body.appendChild(musicadojogo)
    musicadojogo.loop = true
    musicadojogo.addEventListener('canplaythrough', function(){musicadojogo.play();})
    contagem.innerText = j + 1 + '/' + nomes.length
    situacaodohardcore = true
    ativardesativarhardcore()
}

function sorteiodasquestões() {
    imgjogo.src = 'imagensVidrarias/'+nomes[sorteados[j]][0]+'.png'
    var sequencia = []
    sequencia.push(sorteados[j])
    s = 0
    while(s<3){
        let randomNum = Math.floor(Math.random() * nomes.length)
        let igual = false
        for(a = 0; a < sequencia.length; a ++){
            if(sequencia[a] == randomNum)
                igual = true
        }
        if(igual == false){
            s++
            sequencia.push(randomNum)
        }
    }
    sequencia = sequencia.sort(function(){return Math.random()-0.5})
    botao1.innerText = nomes[sequencia[0]][1]
    botao2.innerText = nomes[sequencia[1]][1]
    botao3.innerText = nomes[sequencia[2]][1]
    botao4.innerText = nomes[sequencia[3]][1]
}

function verify(botaoId){
    
    if(document.getElementById(botaoId).innerText == nomes[sorteados[j]][1])
    {
        corretas++
        certas.innerText = 'Certas: ' + corretas
        if(situacaodosefeitos){
        let efeitoacerto = new Audio('sons/rigth.m4a')
        efeitoacerto.addEventListener('canplaythrough', function(){efeitoacerto.play();})}
    }
    else{
        erroneas++
        erradas.innerText = 'Erradas: '+ erroneas
        if(situacaodosefeitos){
        let efeitoerro = new Audio('sons/wrong.m4a')
        efeitoerro.addEventListener('canplaythrough', function(){efeitoerro.play();})}
        
    }
    j++
    if(j == nomes.length){
        document.getElementById('questões').style.display = 'none'
        document.getElementById('telafinal').style.display = 'block'
        if(corretas < 1){
            document.getElementById('telafinal0').style.display = 'block'
        }else if(corretas < 25){
            document.getElementById('telafinal1').style.display = 'block'
        }else if(corretas < 35){
            document.getElementById('telafinal2').style.display = 'block'
        }else if(corretas < 52){
            document.getElementById('telafinal3').style.display = 'block'
        }else if(corretas == 52){
            document.getElementById('telafinal4').style.display = 'block'
        }
    }
    else{
        sorteiodasquestões()
        contagem.innerText = j + 1 + '/' + nomes.length
    }
}

//Funções de botões
function voltarparatelainicial(){
    document.getElementById('menu').style.display = 'block'
    document.getElementById('jogo').style.display = 'none'
    document.body.removeChild(musicadojogo)
    j=0
    corretas=0
    erroneas=0
    contagem.innerText = '0/52'
    erradas.innerText = 'Erradas: ' + erroneas
    certas.innerText = 'Certas: ' + corretas

}

function recomecar(){
    j=0
    corretas=0
    erroneas=0
    contagem.innerText = j + 1 + '/'+nomes.length
    erradas.innerText = 'Erradas: ' + erroneas
    certas.innerText = 'Certas: ' + corretas

    sorteados = []
    for(a = 0; a < nomes.length; a++){sorteados.push(a)}
    sorteados = sorteados.sort(function() {return Math.random() - 0.5})
    sorteiodasquestões()

    document.getElementById('questões').style.display = 'block'
    document.getElementById('telafinal').style.display = 'none'
    document.getElementById('telafinal0').style.display = 'none'
    document.getElementById('telafinal1').style.display = 'none'
    document.getElementById('telafinal2').style.display = 'none'
    document.getElementById('telafinal3').style.display = 'none'
    document.getElementById('telafinal4').style.display = 'none'
    document.getElementById('telafinal5').style.display = 'none'
}

function ativardesativarhardcore() {
    if(situacaodohardcore)
    {
        document.getElementById('questaoporalternativa').style.display = 'block'
        document.getElementById('questaoportexto').style.display = 'none'
        situacaodohardcore = false
        botaohard.innerText = 'Fácil'
        botaohard.style.color = 'black'
        erradas.style.color = 'black'
    }
    else{
        document.getElementById('questaoporalternativa').style.display = 'none'
        document.getElementById('questaoportexto').style.display = 'block'
        situacaodohardcore = true
        botaohard.innerText = 'Difícil'
        botaohard.style.color = 'red'
        erradas.style.color = 'red'
        recomecar()
    }
}

function ativardesativarmusica(){
    if(situacaodamusica){
        botaomusica.style.backgroundImage = 'url(ícones/musical-unnote.png)'
        situacaodamusica = false
        musicadojogo.muted = true
    }
    else{
        botaomusica.style.backgroundImage = 'url(ícones/musical-note.png)'
        situacaodamusica = true
        musicadojogo.muted = false
    }
}

function ativardesativarefeitos(){
    if(situacaodosefeitos)
    {
        botaoefeitos.backgroundImage = 'url(ícones/muted.png)'
        situacaodosefeitos = false
    }
    else {
        botaoefeitos.backgroundImage = 'url(ícones/unmuted.png)'
        situacaodosefeitos = true
    }
}

function somdebotaopadrão() {
    if(situacaodosefeitos)
    {
        let efeitopadrao = new Audio('sons/press.m4a')
        efeitopadrao.addEventListener('canplaythrough', function(){efeitopadrao.play()})
    }
}

document.addEventListener('keydown',function(e){
    if(e.code == 'Enter' && situacaodohardcore == true && document.getElementById('oinput').value != '')
    {
        verifyhard()
    }
})

function verifyhard(){
    if(document.getElementById('oinput').value == nomes[sorteados[j]][1] || document.getElementById('oinput').value == nomes[sorteados[j]][1].toLowerCase())
    {
        corretas++
        certas.innerText = 'Certas: ' + corretas
        if(situacaodosefeitos){
        let efeitoacerto = new Audio('sons/rigth.m4a')
        efeitoacerto.addEventListener('canplaythrough', function(){efeitoacerto.play();})}
        document.getElementById('respostacerta').style.display = 'none'
    }
    else{
        if(situacaodosefeitos){
        let efeitorecomecar = new Audio('sons/recomecar.m4a')
        efeitorecomecar.addEventListener('canplaythrough', function(){efeitorecomecar.play();})}
        document.getElementById('respostacerta').style.display = 'grid'
        document.getElementById('textocerto').innerText = '"' + nomes[sorteados[j]][1] + '",'
        document.getElementById('textoerrado').innerText = 'e não "' + document.getElementById('oinput').value + '"'
        document.getElementById('imagemcerta').src = 'imagensVidrarias/'+nomes[sorteados[j]][0]+'.png'
        recomecar()
        
    }
    document.getElementById('oinput').value = ''
    j++
    if(j == nomes.length){
        document.getElementById('questões').style.display = 'none'
        document.getElementById('telafinal').style.display = 'block'
        document.getElementById('telafinal5').style.display = 'block'
    }
    else{
        sorteiodasquestões()
        contagem.innerText = j + 1 + '/' + nomes.length
    }
}


