function updatetime() {
    let showhour;
    
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,0);
    const  mintues = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);
   let showzone = hours%12 >= 0 ? "am" : "pm";
    if(hours>=12){
        showhour = (hours%12);
        
    }
    showhour = showhour.toString().padStart(2,0);
    const time = showhour +":" +mintues+":"+seconds + "  "+showzone;
    document.getElementById("clock").textContent = time;
    console.log(time);
}

updatetime();
setInterval(updatetime,1000);
