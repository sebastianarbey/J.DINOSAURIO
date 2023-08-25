
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
deltaTime = (new Date() -time) /
}




