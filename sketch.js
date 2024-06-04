// Para jogar de dois jogadores e necesario que a linha 104 esteja comentada //, e retirar // da linha '85'
// para jogar com a maquina e necesario que a linha 85 esteja    comentada '//'e retirar '//' da linha '104' va para a linha 144

//variaveis da bolinha 
let xBolinha = 300;
let yBolinha = 200;
let tamanhoBolinha = 25;
let velocidadexBolinha = 7;
let velocidadeyBolinha = 7;
let raio = tamanhoBolinha / 2

//variaveis da raquete
let xRaquete = 5
let yRaquete = 150
let comprimentoRaquete = 10
let Raquetealtura = 100
let colidiu = false

//variaveis da raquete oponente
let xRaqueteOP = 585
let yRaqueteOP = 150
let velocidadeyOP

//veriaveis placar
let meusPonto = 0
let pontoOP = 0

//sons do jogo
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
 desenhoBolinha ()
 movimentoBolinha()
 raioBolinhaborda()
 mostrarRaquete( xRaquete, yRaquete)
 movimentoRaquete1()
 //ColisaoRaquete()
 verificaColisaoRaquete(xRaquete,yRaquete)
 mostrarRaquete( xRaqueteOP,yRaqueteOP)
 movimentaRaqueteOP()
 verificaColisaoRaquete(xRaqueteOP,yRaqueteOP)
 Placar()
 marcaPonto() 
}
//Bolinha
function desenhoBolinha(){
  circle(xBolinha,yBolinha,tamanhoBolinha);
}
function movimentoBolinha(){
 xBolinha += velocidadexBolinha;
 yBolinha += velocidadeyBolinha;  
}
function raioBolinhaborda(){

 if (xBolinha + raio > width || xBolinha - raio < 0){
  velocidadexBolinha *= -1;  
 }
 
 if (yBolinha + raio > height || yBolinha - raio < 0){
   velocidadeyBolinha *= -1;
 }  
}
//RaqueteJG
function mostrarRaquete(x,y){
 rect(x,y,comprimentoRaquete,Raquetealtura)
}

function movimentoRaquete1() {
    if (keyIsDown(87)) {
        yRaquete -= 10;
    }
    if (keyIsDown(83)) {
        yRaquete += 10;
    }
}

//function movimentaRaqueteOP() {if (keyIsDown(UP_ARROW)) {yRaqueteOP -= 10;}if (keyIsDown(DOWN_ARROW)) {yRaqueteOP += 10;}}


function ColisaoRaquete(){
   if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio <  yRaquete + Raquetealtura && yBolinha + raio > yRaquete){velocidadexBolinha *= -1
    raquetada.play() 
   }
 }

function verificaColisaoRaquete(x,y){
   colidiu =
   collideRectCircle(x, y, comprimentoRaquete, Raquetealtura, xBolinha, yBolinha, raio);
 if (colidiu){
   velocidadexBolinha *= -1
   raquetada.play()
 }
 }

//Movimento Raquete OP
function movimentaRaqueteOP(){velocidadeyOP = yBolinha - yRaqueteOP - comprimentoRaquete /2 - 30; yRaqueteOP += velocidadeyOP}


// Placar
 function Placar(){
    stroke(255)
    textAlign(CENTER)
    textSize(16)
    fill(color(255,140, 0))
    rect(150, 10, 40, 20)
    fill(255)
    text(meusPonto, 170, 26)
    fill(color(255,140, 0))
    rect(450, 10, 40, 20)
    fill(255)
    text(pontoOP, 470, 26)
}


 function marcaPonto(){
   if(xBolinha > 589){
     meusPonto += 1
   ponto.play()
   }
   if(xBolinha < 11){
     pontoOP += 1
   ponto.play()
   }
 }

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}





// controles //
// jogador da direita ( W para cima ) ( S para baixo)
// jogador da esquerda sao as setas do teclado ( coresponde aos seu simbolos) seta para cima = para cima, seta para baixo = para baixo 



















  
































//function movimentaRaqueteOP(){ velocidadeyOP = yBolinha -yRaqueteOP - comprimentoRaquete / 2 - 30; yRaqueteOP += velocidadeyOP + chanceDeErrar calculaChanceDeErrar()}

//Movimento Raquete OP
//function movimentaRaqueteOP(){velocidadeyOP = yBolinha - yRaqueteOP - comprimentoRaquete /2 - 30; yRaqueteOP += velocidadeyOP} 



