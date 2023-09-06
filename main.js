// creating a pokedex using AJAX
// const display = document.getElementById("display")

// const app = new XMLHttpRequest();
// const url = "https://pokeapi.co/api/v2/pokemon";

// app.onload = function(){

//     console.log(this.responseText)
    
//     display.innerHTML = this.responseText;

// }


// app.open("GET", "https://pokeapi.co/api/v2/pokemon")
// app.send()


// Usin AJAX to create a diynamic HTML page




const xhr = new XMLHttpRequest();
const display = document.getElementById("display")
const boton = document.getElementById("buscar")
const inputPokemon = document.getElementById("pokemon")
const url = "https://pokeapi.co/api/v2/pokemon/"
// console.log(inputPokemon)


boton.addEventListener("click",() => {
xhr.onload = () => {




// const parseado = JSON.parse(this.responseT)
const objetoPoke = JSON.parse(xhr.response);

console.log(objetoPoke)
const pokeName = objetoPoke.name;
const pokeTipo = objetoPoke.types;
const pokeHabilidad = objetoPoke.abilities;

document.getElementById("pokemonName").innerHTML = pokeName;
document.getElementById("pokemonType").innerHTML = pokeTipo.map(types => types.type.name).join(" - ");
document.getElementById("pokemonAbilities").innerHTML = pokeHabilidad.map(abilities => abilities.ability.name).join(" - ");

// const objetoPokee = JSON.stringify(objetoPoke);
// display.innerHTML = objetoPokee.name
// display.innerHTML = JSON.stringify(objetoPoke);
}


xhr.open("GET", `${url+inputPokemon.value}`)
xhr.send()
})
