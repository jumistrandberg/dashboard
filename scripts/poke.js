document.addEventListener("DOMContentLoaded", () => {
  // Get the elements
  const pokeCard = document.getElementById("poke-card");
  const pokeBox = document.getElementById("poke-box");
  let pokeStatusText = document.getElementById("poke-status-text");
  let catchBtn;
  let pokeImg;

  let species;
  const speciesUrl = "https://pokeapi.co/api/v2/pokemon-species/";

  // Url to the national dex
  const url = "https://pokeapi.co/api/v2/pokemon/";
  let randomPokeNum = Math.floor(Math.random() * 1025 + 1);

  // Get the caught poke from local storage
  let caughtPoke = JSON.parse(localStorage.getItem("caughtPoke")) || [];
  // Show the party
  displayCaughtPoke();

  // Class for pokemon
  class Pokemon {
    constructor(name, type, catchRate, img) {
      this.name = "";
      this.type = "";
      this.catchRate = "";
      this.img = "";
      this.speciesUrl = "";
      this.species = "";
    }

    // Method to get the species URL
    getSpeciesUrl(url) {
      this.speciesUrl = url;
    }

    // Method to get the values
    async getPokeValues() {
      // Fetch data from species URL
      const response = await fetch(this.speciesUrl);
      const speciesData = await response.json();

      // Set the values
      this.name = this.poke.species.name;
      this.type = this.poke.types[0].type.name;
      this.img = this.poke.sprites.other["official-artwork"].front_default;
      this.catchRate = speciesData.capture_rate;
    }

    // Method to get the capture rate from species
    async getCatchRate() {
      const response = await fetch(speciesUrl + randomPokeNum);
      this.species = (await response).json();
      species = this.species;

      return species;
    }

    // Method to fetch the main data
    async fetchPokemonData() {
      const response = await fetch(url + randomPokeNum);
      this.poke = await response.json();
    }
  }

  // New Pokemon instance
  const thisPoke = new Pokemon();

  // Display Pokemon on UI function
  async function displayPokeData() {
    // Set the species URL of this pokemon
    thisPoke.getSpeciesUrl(speciesUrl + randomPokeNum);

    await thisPoke.fetchPokemonData();
    await thisPoke.getCatchRate();
    await thisPoke.getPokeValues();
    console.log(thisPoke.catchRate);

    // Create img
     pokeImg = document.createElement("img");
    pokeImg.classList.add("poke-img");
    pokeImg.src = thisPoke.img;

    //  Show which pokemon appeared on the dashboard
    pokeStatusText.innerText = thisPoke.name + " appeared!";

    pokeCard.appendChild(pokeStatusText);
    pokeCard.appendChild(pokeImg);

    createCatchBtn();
  }

  // Create the catch button
  function createCatchBtn() {
    // Check how many party members
    const partyPokeNum = caughtPoke.length;
    console.log(partyPokeNum);

    catchBtn = document.createElement("button");

    if (partyPokeNum >= 6) {
      catchBtn.textContent = "Your party is full!";
    } else {
      catchBtn.textContent = "Catch " + thisPoke.name;

      // Trigger catch if button is clicked
      catchBtn.addEventListener("click", () => {
        catchCondition();
      });
    }

    pokeCard.appendChild(catchBtn);
  }

  // Check if catch is successful
  function catchCondition() {
    // Generate the balls number between 0 and 255
    const randomBallNum = Math.floor(Math.random() * 256);

    // Try randomBallNum against catchRate
    if (thisPoke.catchRate <= randomBallNum) {
      // Trigger catch success
      // Store caught pokemon as an object and push to array
      caughtPoke.push({
        name: thisPoke.name,
        img: thisPoke.img,
      });

      // Call the display party function to update the array
      displayCaughtPoke();

      // Show user in UI that catch was successful
      pokeStatusText.innerText = thisPoke.name + " was added to your party!";

      // Save updated caughtPoke to localStorage
      localStorage.setItem("caughtPoke", JSON.stringify(caughtPoke));

      catchBtn.remove();
      console.log("success");
    } else {
      // Trigger catch fail
      console.log("fail");
      pokeImg.style.width = '0px'
      catchBtn.remove();
      pokeStatusText.innerText = thisPoke.name + ' got away!'
    }
  }

  // Function to display the party and add remove icon
  function displayCaughtPoke() {
    pokeBox.innerHTML = "";
    caughtPoke.forEach((poke) => {
      // Create div for each party poke and add the name
      const partyDiv = document.createElement("div");
      partyDiv.classList.add("party-div");
      partyDiv.textContent = poke.name;

      // Create img element for each poke in party
      const partyImg = document.createElement("img");
      partyImg.classList.add("party-img");
      partyImg.src = poke.img;

      partyDiv.appendChild(partyImg);

      const removeIcon = document.createElement("i");
      removeIcon.classList.add("fas", "fa-times", "remove-icon");
      removeIcon.setAttribute("title", "Remove Pokemon");
      partyDiv.appendChild(removeIcon);

      pokeBox.appendChild(partyDiv);

      // Listen for clicks on remove icon and remove the Pokemon
      removeIcon.addEventListener("click", () => {
        const index = caughtPoke.indexOf(poke);
        if (index !== -1) {
          caughtPoke.splice(index, 1);
          displayCaughtPoke();
          localStorage.setItem("caughtPoke", JSON.stringify(caughtPoke));
          catchBtn.remove();
          createCatchBtn();
        }
      });
    });
  }

  displayPokeData();
});

// Get the caught poke from local storage
// let caughtPoke = JSON.parse(localStorage.getItem('caughtPoke')) || [];
// // Show the party
// displayCaughtPoke();

// // The name of the random pokemon
// let pokeName;

// async function randomPokeGenerator() {
//   const response = await fetch(url + randomPokeNum);
//   poke = await response.json();
//   console.log(poke);

//   // Get the name of the pokemon
//   pokeName = poke.name;
//   // Show which pokemon appeared on the dashboard
//   pokeStatusText.innerText = pokeName + ' appeared!';
//   pokeCard.appendChild(pokeStatusText);

//   createCatchBtn();
//   catchBtn.disabled = false;
// }

// // Create the catch button
// function createCatchBtn() {
//   catchBtn = document.createElement('button');
//   catchBtn.textContent = 'Catch ' + pokeName;

//   pokeCard.appendChild(catchBtn);

//   // Trigger catch if button is
//   catchBtn.addEventListener('click', () => {
//     catchCondition(pokeName);
//   });
// }

// // Catch condition function
// function catchCondition() {
//   const catchRate = poke.capture_rate;

//   // Generate the balls number between 0 and 255
//   const randomBallNum = Math.floor(Math.random() * 256);

//   // Check if capture is successful
//   if (catchRate <= randomBallNum) {
//     caughtPoke.push(pokeName);
//     displayCaughtPoke();
//     pokeStatusText.innerText = pokeName + ' was added to your party!';
//       // Save updated caughtPoke to localStorage
//       localStorage.setItem('caughtPoke', JSON.stringify(caughtPoke));
//       catchBtn.disabled = true;

//   } else {
//     // The pokemon escapes on fail
//     pokeStatusText.innerText = pokeName + ' got away!';
//     pokeCard.appendChild(pokeStatusText);
//     catchBtn.disabled = true;

//   }
//   newPoke()
//   catchBtn.remove();
// }

// // Function to display the party and add remove icon
// function displayCaughtPoke() {
//     pokeBox.innerHTML = '';
//     caughtPoke.forEach((poke) => {
//       const partyDiv = document.createElement('div');
//       partyDiv.textContent = poke;

//       const removeIcon = document.createElement('i');
//       removeIcon.classList.add('fas', 'fa-times', 'remove-icon');
//       removeIcon.setAttribute('title', 'Remove Pokemon');
//       partyDiv.appendChild(removeIcon);

//       pokeBox.appendChild(partyDiv);

//       // Listen for clicks on remove icon and remove the Pokemon
//       removeIcon.addEventListener('click', () => {
//         const index = caughtPoke.indexOf(poke);
//         if (index !== -1) {
//           caughtPoke.splice(index, 1);
//           displayCaughtPoke();
//           localStorage.setItem('caughtPoke', JSON.stringify(caughtPoke));
//         }
//       });
//     });
//   }

//   function newPoke() {
//     const newPokeBtn = document.createElement('button');
//     newPokeBtn.textContent = 'Find more Pokemon';

//     pokeCard.append(newPokeBtn);

//     newPokeBtn.addEventListener('click', () => {
//       randomPokeNum = Math.floor(Math.random() * 1025 + 1); // Generate a new random Pokemon number

//       randomPokeGenerator();
//       newPokeBtn.remove();
//     })
//   }

//   // Come back to better functionality maybe

//   // function noPokeTimer() {
//   //   // Disable catch button during the timer
//   //   catchBtn.disabled = true;
//   //   pokeStatusText.innerText = 'No Pokemon here...';

//   //   // Set a random duration between 10 seconds to 5 minutes
//   //   const randomDuration = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;

//   //   // Wait for the random duration before enabling the catch button again
//   //   setTimeout(() => {
//   //     randomPokeNum = Math.floor(Math.random() * 1025 + 1); // Generate a new random Pokemon number
//   //     catchBtn.disabled = false;
//   //   }, randomDuration);
//   // }

// randomPokeGenerator();
