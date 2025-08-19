const pic = document.querySelectorAll(".slides img");
const prevbutton = document.getElementById("prevbut");
const nextbutton = document.getElementById("nextbut");
let index =0;
let intervalID = null;


document.addEventListener("DOMContentLoaded",initslide());

function initslide() {
    if (pic.length >0) {
        pic[index].classList.add("displaypic");
        intervalID=setInterval(next,4000);
    }
    
}


function showslide(showindex) {
    
    if (showindex >= pic.length) {
        index=0;
        showindex=index;
        console.log("index is "+index);
    } else if (showindex < 0) {
        index = pic.length-1;
        showindex =index;
    }

    pic.forEach(pic=>{
        pic.classList.remove("displaypic");
    })
 
    pic[showindex].classList.add("displaypic");
}

function prev() {
        clearInterval(intervalID);
        index--;
        showslide(index);
}

function  next() {
    index++;
    showslide(index);
}