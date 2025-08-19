
async function fetchdata(serach) {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+serach); 
        if (!response.ok) {
            throw new Error("Can not fetch data");   
        }

        const data = await response.json();
        //console.log(data);
        //console.log(data.sprites);
        
        return data;
        
        
    } catch (error) {
        console.error(error);
    }
}

//fetchdata("pikachu");



/**
 * @type {HTMLInputElement}
 */
const submit = document.getElementById("submintbutton");
/**
 * @type {HTMLInputElement}
 */
const input = document.getElementById("inputtext");

/**
 * @type {HTMLInputElement}
 */
const pic = document.getElementById("picforshow");


submit.onclick = async function () {
    if (input.textContent != null) {
        let text = input.value.toLowerCase();
        let data = await fetchdata(text);
        console.log(data);
        
        let picture = data.sprites.front_default;
        pic.src =picture;
        pic.style.display = "block";

    }else{
        alert("please input text");
    }
    
}