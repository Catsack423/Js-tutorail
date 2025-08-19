

document.getElementById("generate").onclick = function() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let random = Math.floor(Math.random()*(max-min))+min;
    document.getElementById("shownumberlabel").textContent ="Number is " +random;
    
    console.log(min);
    console.log(max);
    console.log(random);
}