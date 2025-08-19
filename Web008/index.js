const startbutton = document.getElementById("start-button");
const stopbutton = document.getElementById("stop-button");
const clearbutton = document.getElementById("clear-button");
const clock = document.getElementById("clock");

let isRunning = false;
let timer = 0;
let starttime =0;
let elapsedTime =0;




function updatetime() {
    const current = Date.now();
    elapsedTime = current - starttime;

    let hours = Math.floor(elapsedTime/(60*60*1000.00)).toString().padStart(2,0);
    let mintues = Math.floor(elapsedTime /(60*1000.00)%60).toString().padStart(2,0);
    let seconds = Math.floor(elapsedTime/1000 % 60).toString().padStart(2,0);
    let miliseconde = Math.floor(elapsedTime%1000/10).toString().padStart(2,0);
    clock.textContent = hours +":" + mintues +":" + seconds+":"+ miliseconde;
    
}





function start() {
    if (!isRunning) {
        starttime = Date.now() - elapsedTime; 
        timer=setInterval(updatetime,10);
        isRunning=true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now()-starttime;
        isRunning =false;

    }
}

clearbutton.onclick = function clear() {
    
    clearInterval(timer);
    elapsedTime = 0;
    starttime =0;
    clock.textContent = "00:00:00:00"
    isRunning =false;
    
}