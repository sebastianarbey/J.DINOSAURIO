
var time = new Date();
var deltaTime = 0;

if (document.readyState === "complete" || document.readyState === "interactive"){
setTimeout(Init,1);
} else{
document.addEventListener("DOMContentLoaded", Init);
}

function Init(){
time = new Date();
Start();

}

function loop(){
deltaTime = (new Date() -time) / 1000;
time = new Date();
Update()
requestAnimationFrame(loop);
}

let sueloY = 22;
let velY = 0;
let impulso = 900;
let gravedad = 2500;

let dinoPosX = 42;
let dinoPosY = sueloY;

let sueloX = 0;
let velEscenario = 1280/3;
let gameVel = 1;
let score = 0;

let parado = false;
let saltando = false;

let tiempoHasta

let contenedor;
let dino;
let textoScore;
let suelo;
let gameOver;

function Start(){
gameOver = document.querySelector(".game-over");
suelo = document.querySelector(".suelo");
contenedor = document.querySelector(".contenedor");
textoScore = document.querySelector(".score");
dino = document.querySelector(".dino");
document.addEventListener("Keydown", HandleKeyDown);
}

function HandleKeyDown(ev){
if (ev.Keycode == 32){
  saltar();
}
}

function saltar (){
if (dinoPosY === sueloY) { 
saltando = true;
velY = impulso;
dino.classList.remove("dino-corriendo"); 
}
}

function Update(){

MoverSuelo();
MoverDinosaurio();

  velY -= gravedad * deltaTime;
}

function MoverSuelo(){
sueloX += CalcularDesplazamiento();
suelo.style.left = -(sueloX % contenedor.clienteWidth) + "px";
}

function CalcularDesplazamiento() {
return velEscenario * deltaTime * gameVel;
}

function MoverDinosaurio() {
  dinoPosY += velY * deltaTime;
 if (dinoPosY < sueloY){
      TocarSuelo();
}
 dino.style.bottom = dinoPosY+"px";

}

function TocarSuelo(){
dinoPosY = sueloY;
velY = 0;
if (saltando){
dino.classList.add("dino-corriendo");
}
saltando = false;
}



