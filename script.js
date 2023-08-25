
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
Loop();
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
}

function Update(){

}




