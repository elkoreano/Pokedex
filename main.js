// Usin AJAX to create a diynamic HTML page

/**
 * Creamos las variables que contienen los diferentes elementos en el html para usar
 * Ademas tambien creamos el XMLHttpRequest, objeto el cual nos permitira obtener informacion de la API 
 * */ 
const xhr = new XMLHttpRequest(); 
const boton = document.getElementById("buscar")
const inputPokemon = document.getElementById("pokemon")
const url = "https://pokeapi.co/api/v2/pokemon/"
// console.log(inputPokemon)


// Se crea el evento de boton que ejecutara la logica dentro del callback
boton.addEventListener("click",() => {
xhr.onload = () => {

    // Parseamos el string a un objeto para poder tomar sus propiedades
    const objetoPoke = JSON.parse(xhr.response);

    // Probamos por consola 
    console.log(objetoPoke)

    // Asignamos los atributos del objeto a variables
    const pokeName = objetoPoke.name;
    const pokeTipo = objetoPoke.types;
    const pokeHabilidad = objetoPoke.abilities;
    const pokeImg = objetoPoke.sprites.front_default

    //

    document.getElementById("pokemonName").innerHTML = pokeName;
    document.getElementById("pokemonType").innerHTML = pokeTipo.map(types => types.type.name).join(" - ");
    document.getElementById("pokemonAbilities").innerHTML = pokeHabilidad.map(abilities => abilities.ability.name).join(" - ");

    //
    document.getElementById("pokeImgg").src = pokeImg;

    }

    // Se ejecuta un metodo GET en la url siguiente, ademas del valor del input en el HTML
    xhr.open("GET", `${url+inputPokemon.value}`)
    xhr.send()
})
