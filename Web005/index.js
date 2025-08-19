/**@type {HTMLInputElement}*/
let kbut = document.getElementById("kelwin_radio");
/**@type {HTMLInputElement}*/
let fbut = document.getElementById("faren_radio");
/**@type {HTMLInputElement}*/
let temp = document.getElementById("Temperature");


kbut.onchange = function (){
    if (fbut.checked) {
        fbut.checked = false;
        temp.value = Math.round(  ((temp.value-32)*5/9.00) + 273);
        
    }else if(kbut.checked){
        temp.value = Math.round(temp.value+273);
    }
        
    

};

fbut.onchange = function (){
    if (kbut.checked) {
        kbut.checked = false;
        temp.value = Math.floor(((temp.value - 273.15) * 9/5) + 32) ;
    }else if(fbut)
    {
        temp.value = Math.floor((9.00 * temp.value /5.00 )+32);
        
    }
}
console.log(fbut);


