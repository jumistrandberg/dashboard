document.addEventListener('DOMContentLoaded', () => {
// Get the elements
const pokeCard = document.getElementById('poke-card');
const pokeBox = document.getElementById('poke-box');
let pokeStatusText = document.getElementById('poke-status-text');
let catchBtn;
let poke;

// Get the caught poke from local storage 
let caughtPoke = JSON.parse(localStorage.getItem('caughtPoke')) || [];
// Show the party 
displayCaughtPoke()

// Url to the national dex
const url = 'https://pokeapi.co/api/v2/pokemon-species/';
let randomPokeNum = Math.floor(Math.random() * 1025 + 1);
// The name of the random pokemon
let pokeName;

async function randomPokeGenerator() {
  const response = await fetch(url + randomPokeNum);
  poke = await response.json();
  console.log(poke);

  // Get the name of the pokemon
  pokeName = poke.name;
  // Show which pokemon appeared on the dashboard
  pokeStatusText.innerText = pokeName + ' appeared!';
  pokeCard.appendChild(pokeStatusText);

  createCatchBtn();
  catchBtn.disabled = false;
}

// Create the catch button
function createCatchBtn() {
  catchBtn = document.createElement('button');
  catchBtn.textContent = 'Catch ' + pokeName;

  pokeCard.appendChild(catchBtn);

  // Trigger catch if button is
  catchBtn.addEventListener('click', () => {
    catchCondition(pokeName);
  });
}

// Catch condition function
function catchCondition() {
  const catchRate = poke.capture_rate;

  // Generate the balls number between 0 and 255
  const randomBallNum = Math.floor(Math.random() * 256);

  // Check if capture is successful
  if (catchRate <= randomBallNum) {
    caughtPoke.push(pokeName);
    displayCaughtPoke();
    pokeStatusText.innerText = pokeName + ' was added to your party!';
      // Save updated caughtPoke to localStorage
      localStorage.setItem('caughtPoke', JSON.stringify(caughtPoke));
      catchBtn.disabled = true;

  } else {
    // The pokemon escapes on fail
    pokeStatusText.innerText = pokeName + ' got away!';
    pokeCard.appendChild(pokeStatusText);
    catchBtn.disabled = true;

  }
  newPoke()
  catchBtn.remove();
}

// Function to display the party and add remove icon
function displayCaughtPoke() {
    pokeBox.innerHTML = ''; 
    caughtPoke.forEach((poke) => {
      const pokeDiv = document.createElement('div');
      pokeDiv.textContent = poke;
      
      const removeIcon = document.createElement('i');
      removeIcon.classList.add('fas', 'fa-times', 'remove-icon');
      removeIcon.setAttribute('title', 'Remove Pokemon');
      pokeDiv.appendChild(removeIcon);
  
      pokeBox.appendChild(pokeDiv);
  
      // Listen for clicks on remove icon and remove the Pokemon
      removeIcon.addEventListener('click', () => {
        const index = caughtPoke.indexOf(poke);
        if (index !== -1) {
          caughtPoke.splice(index, 1);
          displayCaughtPoke();
          localStorage.setItem('caughtPoke', JSON.stringify(caughtPoke));
        }
      });
    });
  }

  function newPoke() {
    const newPokeBtn = document.createElement('button');
    newPokeBtn.textContent = 'Find more Pokemon';

    pokeCard.append(newPokeBtn);

    newPokeBtn.addEventListener('click', () => {
      randomPokeNum = Math.floor(Math.random() * 1025 + 1); // Generate a new random Pokemon number

      randomPokeGenerator();
      newPokeBtn.remove();
    })
  }

  // Come back to better functionality maybe

  // function noPokeTimer() {
  //   // Disable catch button during the timer
  //   catchBtn.disabled = true;
  //   pokeStatusText.innerText = 'No Pokemon here...';

  
  //   // Set a random duration between 10 seconds to 5 minutes
  //   const randomDuration = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
  
  //   // Wait for the random duration before enabling the catch button again
  //   setTimeout(() => {
  //     randomPokeNum = Math.floor(Math.random() * 1025 + 1); // Generate a new random Pokemon number
  //     catchBtn.disabled = false;
  //   }, randomDuration);
  // }

randomPokeGenerator();

})
