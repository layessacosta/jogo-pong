let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

// velocidade da bolinha
let velocidadexBolinha = 6
let velocidadeyBolinha = 6
let raqueteComprimento = 10
let raqueteAltura = 90

// variaveis da raquete
let xRaquete = 5
let yRaquete = 150


// variaveis do oponete
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeyOponente;
let chanceDeErrar = 0;
//placar do Jogo 
let meusPontos = 0
let pontosOponentes = 0

// sons do jogo
let raquetada;
let ponto ;
let trilha ;

//function preload (){
 //trilha = loadSound("trilha.mp3")
 // ponto = loadSound ("ponto.mp3")
 // raquetada = loadSound ("raquetada.mp3")
//}
    

let colidiu = false;

function setup() {
  createCanvas(600,500)
  //trilha.loop ();
}

function draw() {
  background(2);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  incluirPlacar ()
  marcaPonto()
  calculaChanceDeErrar ()
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
 
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeyBolinha *= -1;
  }
 
}

function mostraRaquete (x, y){
   rect (x,y,raqueteComprimento, raqueteAltura)
   
 } 


function movimentaMinhaRaquete (){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10
  }
  if (keyIsDown (DOWN_ARROW)){
    yRaquete += 10
   }
}  
function verificaColisaoRaquete (){
  if(xBolinha- raio < xRaquete+ raqueteComprimento 
     && yBolinha - raio > yRaquete ){
    velocidadexBolinha *= -1
    
  }
}

function verificaColisaoRaquete (x,y){
  colidiu = 
  collideRectCircle(x,y,raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadexBolinha *= -1
  }
}


function movimentaRaqueteOponente (){
  velocidadeyOponente = yBolinha -yRaqueteOponente -                 raqueteComprimento/2 - 30
  yRaqueteOponente += velocidadeyOponente + chanceDeErrar

  
}

function incluirPlacar (){
  stroke (255)
  textAlign (CENTER)
  textSize (20)
  fill (color(255,140, 0))
  rect (150, 10, 40, 20)
  fill ( 255 )
  text(meusPontos, 170, 26)
  fill (color(255,140, 0))
  rect(450,10, 40, 20)
  fill ( 255 )
  text(pontosOponentes, 470, 26 )
}

function marcaPonto (){
  if(xBolinha > 590){
    meusPontos += 1
  }
  if(xBolinha < 10){
    pontosOponentes += 1
  }
}
function calculaChanceDeErrar() {
  if (pontosOponentes >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}




