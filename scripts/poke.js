// Get the elements
const pokeCard = document.getElementById("poke-card");
const pokeBox = document.getElementById("poke-box");
let pokeStatusText = document.getElementById("poke-status-text");
let catchBtn;

// Url to the national dex
const url = "https://pokeapi.co/api/v2/pokemon-species/";
const randomPokeNum = Math.floor(Math.random() * 1025 + 1);
// The name of the random pokemon
let pokeName;
let caughtPoke = [];

async function randomPokeGenerator() {
  const response = await fetch(url + randomPokeNum);
  const poke = await response.json();
  console.log(poke);

  // Get the name of the pokemon
  pokeName = poke.name;
  // Show which pokemon appeared on the dashboard
  pokeStatusText.innerText = pokeName + " appeared!";
  pokeCard.appendChild(pokeStatusText);

  createCatchBtn();
  catchBtn.disabled = false;

}

// Create the catch button
function createCatchBtn() {
  catchBtn = document.createElement("button");
  catchBtn.textContent = "Catch " + pokeName;

  pokeCard.appendChild(catchBtn);

  // Trigger catch if button is
  catchBtn.addEventListener("click", () => {
    catchCondition(pokeName);
  });
}

// Catch condition function
function catchCondition(poke) {
  const catchRate = poke.capture_rate;

  // Generate the balls number between 0 and 255
  const randomBallNum = Math.floor(Math.random() * 256);

  // Check if capture is successful
  if (catchRate <= randomBallNum) {
    console.log("caught");
  } else {
    // The pokemon escapes on fail
    pokeStatusText.innerText = pokeName + " got away!";
    pokeCard.appendChild(pokeStatusText);
    catchBtn.disabled = true;
  }
}

randomPokeGenerator();
