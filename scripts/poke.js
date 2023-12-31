// Url to the national dex
const url = 'https://pokeapi.co/api/v2/pokemon-species/';
const randomPokeNum = Math.floor(Math.random() * 1025 + 1);

async function randomPokeGenerator() {
    const response = await fetch(url + randomPokeNum); 
    const poke = await response.json(); 
    console.log(poke);

}

randomPokeGenerator();