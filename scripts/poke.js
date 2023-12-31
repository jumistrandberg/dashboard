// Get the elements
const pokeCard = document.getElementById("poke-card");
const pokeBox = document.getElementById("poke-box");
let pokeStatusText = document.getElementById("poke-status-text");
let catchBtn;
let poke;

// Get the caught poke from local storage 
let caughtPoke = JSON.parse(localStorage.getItem('caughtPoke')) || [];
// Show the party 
displayCaughtPoke()

// Url to the national dex
const url = "https://pokeapi.co/api/v2/pokemon-species/";
const randomPokeNum = Math.floor(Math.random() * 1025 + 1);
// The name of the random pokemon
let pokeName;

async function randomPokeGenerator() {
  const response = await fetch(url + randomPokeNum);
  poke = await response.json();
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
function catchCondition() {
  const catchRate = poke.capture_rate;
  // Generate the balls number between 0 and 255
  const randomBallNum = Math.floor(Math.random() * 256);

  // Check if party is full
  if(caughtPoke.length >= 6) {
    pokeStatusText.innerText = 'Your party is full! You need to release a party member before you can add another!';
    return
} 

  // Check if capture is successful
  if (catchRate <= randomBallNum) {
    caughtPoke.push(pokeName);
    displayCaughtPoke();
    pokeStatusText.innerText = pokeName + " was added to your party!";
      // Save updated caughtPoke to localStorage
      localStorage.setItem("caughtPoke", JSON.stringify(caughtPoke));
  } else {
    // The pokemon escapes on fail
    pokeStatusText.innerText = pokeName + " got away!";
    pokeCard.appendChild(pokeStatusText);
    catchBtn.disabled = true;
  }
}

// Function to display the party and add remove icon
function displayCaughtPoke() {
    pokeBox.innerHTML = ""; 
    caughtPoke.forEach((poke) => {
      const pokeDiv = document.createElement("div");
      pokeDiv.textContent = poke;
      
      const removeIcon = document.createElement("i");
      removeIcon.classList.add("fas", "fa-times", "remove-icon");
      removeIcon.setAttribute("title", "Remove Pokemon");
      pokeDiv.appendChild(removeIcon);
  
      pokeBox.appendChild(pokeDiv);
  
      // Listen for clicks on remove icon and remove the Pokemon
      removeIcon.addEventListener("click", () => {
        const index = caughtPoke.indexOf(poke);
        if (index !== -1) {
          caughtPoke.splice(index, 1);
          displayCaughtPoke();
          updateCatchButton();
          localStorage.setItem("caughtPoke", JSON.stringify(caughtPoke));
        }
      });
    });
  }
  
  function updateCatchButton() {
    if (caughtPoke.length >= 6) {
      catchBtn.disabled = true; // Disable catch button
    } else {
      catchBtn.disabled = false; // Enable catch button
    }
  }

randomPokeGenerator();
