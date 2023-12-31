// Get the elements 
const pokeCard = document.getElementById('poke-card');
const pokeBox = document.getElementById('poke-box'); 

// Url to the national dex
const url = 'https://pokeapi.co/api/v2/pokemon-species/';
const randomPokeNum = Math.floor(Math.random() * 1025 + 1);
// The name of the random pokemon 
let pokeName;

async function randomPokeGenerator() {
    const response = await fetch(url + randomPokeNum); 
    const poke = await response.json(); 
    console.log(poke);

    pokeName = poke.name;
    const pokeAppearText = document.createElement('p'); 
    pokeAppearText.innerText = (pokeName + ' appeared!')

    pokeCard.appendChild(pokeAppearText);

}

// 


randomPokeGenerator();