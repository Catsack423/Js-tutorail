let anime = prompt("What is your favorite anime?");
const list = document.getElementById("listanime");


let namet = document.createElement("li");
namet.textContent = anime;
list.appendChild(namet);

console.log("done");
alert("Well done");