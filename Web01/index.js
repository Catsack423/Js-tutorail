//console.log("hello my biy");
//console.log("I like anime");


//window.alert("I like attack on titan");
//console.log(3+4);
let space = " ";

document.getElementById("submitbutt").onclick = function(){
    document.getElementById("listofanime").innerHTML +=
        space + document.getElementById("inputtext").value + "<br>";

    console.log(document.getElementById("listofanime").innerHTML);
};
