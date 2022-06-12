//seletores e variáveis

var lista = ['LASANHA', 'PIZZA',
'PANQUECA', 'FEIJOADA', 'BOLACHA', 'POLENTA', 'TORRESMO', 'FRANGO', 'ARROZ', 'MINGAU', 'QUEIJO', 'SOPA', 'CUSCUZ'];
var tabuleiro = document.getElementById('forca').getContext('2d');
var letras = [];
var palavraCorreta = '';
var erros = 3;
var addArray = document.getElementById('text-input');


//escolher palavra
function novaPalavra() {
    var palavra = lista[Math.floor(Math.random() * lista.length)]
    palavraSecreta = palavra 
    console.log(palavra)
    return palavra
}novaPalavra()

//aparecer traços
function novoTraco() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin ="round";
    tabuleiro.strokeStyle = "#565591";
    tabuleiro.beginPath();
    var eixo  = 500/palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++){
        tabuleiro.moveTo(500+(eixo*i),640)
        tabuleiro.lineTo(540+(eixo*i),640)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
}novoTraco(novaPalavra())

//mostrar letra correta
function escreverLetraCorreta(index){
    tabuleiro.font = 'bold 48px Barlow';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin ="round";
    tabuleiro.strokeStyle = "#565591";
    var eixo  = 500/palavraSecreta.length
    tabuleiro.fillText(palavraSecreta[index],505+(eixo*index), 620)
    tabuleiro.stroke()
}

//escrever letra incorreta
function escreverLetraIncorreta(letra, errorsLeft){
    tabuleiro.font = 'bold 42px Barlow';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin ="round";
    tabuleiro.strokeStyle = "#565591";
    tabuleiro.fillText(letra, 535+(42*(-5-errorsLeft)),710,42)
}

//validação letra correta
function verificarLetraCorreta(key){
    if(letras.length < 1 || letras.indexOf(key) < 0){
        console.log(key)
        letras.push(key)
        return false
    }else{
        letras.push(key.toUpperCase())
        return true
    }
}

//adicionar letra correta
function adicionarLetraCorreta(i){
    palavraCorreta += palavraSecreta[i].toUpperCase()
}

//adicionar letra incorreta
function adicionarLetraIncorreta(letter){
    if(palavraSecreta.indexOf(letter) <= 0){
        erros -= 1
    }
}

document.onkeydown = (e) => {
    var letra = e.key.toUpperCase()
    console.log(letra)
    if(!verificarLetraCorreta(e.key)){
        if(palavraSecreta.includes(letra)){
            adicionarLetraCorreta(palavraSecreta.indexOf(letra))
            for( let i = 0 ; i < palavraSecreta.length ; i++){
                if(palavraSecreta[i] === letra){
                    escreverLetraCorreta(i)
                }
            }
        }

    else {
        if (!verificarLetraCorreta(e.key)) 
        return 
        adicionarLetraIncorreta(letra)
        escreverLetraIncorreta(letra, erros)
    }
}
};

//adiciona nova palavra
function adicionaPalavra(){
    let novaPalavra = document.getElementById("text-input");
    lista.push(novaPalavra.value.toUpperCase());
    console.log(lista)
}
