const inbutton = document.getElementById("incress");
const resetbutton = document.getElementById("reset");
const dercressbutton = document.getElementById("decress");
let count = 0;
window.alert("Hello");


inbutton.onclick= function(){
    count++;
    document.getElementById("countLabel").textContent = count;
};

dercressbutton.onclick = function(){
    count--;
    document.getElementById("countLabel").textContent = count;
};

resetbutton.onclick = function(){
    count = 0;
    //console.log(count);
    document.getElementById("countLabel").textContent = count;
};