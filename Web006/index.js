    /**@type {HTMLInputElement} */
    let numpass = document.getElementById("num");
    /**@type {HTMLInputElement} */
    let bigpass = document.getElementById("big");
    /**@type {HTMLInputElement} */
    let smallpass = document.getElementById("small");
    /**@type {HTMLInputElement} */
    let sympass = document.getElementById("sym");
    /**@type {HTMLInputElement} */
    let textare = document.getElementById("showtext");

const lowletter = "abcdefghijklmnopqrstuvwxyz";
const bigletter = lowletter.toUpperCase();
const num = "1234567890";
const sym = "*&#!@#_$*%+*()?<>][{}|;"

function genpass() {
    let result ="";
    if(smallpass.checked){
        result = lowletter;
    }
    if(bigpass.checked){
        result+=bigletter;
    }
    if (numpass.checked) {
        result+=num;
    }
    if (sympass.checked) {
        result+=sym;
    }
    console.log("paas is"+result);
    
    return result;

}

/**
 * 
 * @param {String} ee 
 * @returns {String}
 */
function randompass(ee) {
    let result ="";
    let randomsize = Math.floor(Math.random()*ee.length)+8;
    for (let i = 0; i <randomsize; i++) {
        let random = Math.floor(Math.random()*ee.length);
        result += ee.charAt(random);
    }
    
    
    return result;
}


function mybutton (){
    if(!smallpass.checked && !bigpass.checked && !numpass.checked && !smallpass.checked){
        alert("please select ");
    }else{
        textare.innerHTML = randompass(genpass());
    }

    
}