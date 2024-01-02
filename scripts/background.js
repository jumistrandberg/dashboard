document.addEventListener("DOMContentLoaded", () => {
  // Get elements
  const bgBtn = document.getElementById("bg-btn");
  const bgSearchInput = document.getElementById("bg-search-input");
  const bgSearchBtn = document.getElementById("bg-search-btn");

  // Function to get the API key
  async function getApiKey() {
    try {
      const response = await fetch("./apiKeys.json");
      if (response.ok) {
        const keyArray = await response.json();
        const bgApiKey = keyArray[1].unsplash;
        return bgApiKey;
      } else {
        console.log(`Error: ${response.status}`);
        return null;
      }
    } catch (error) {
      console.error("Error fetching API key:", error);
      return null;
    }
  }

  async function randomImg(search) {
    try {
      const apiKey = await getApiKey();
      const url = `https://api.unsplash.com/photos/random?query=${search}&client_id=${apiKey}`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        const imgUrl = data.urls.regular;
        // set as bg
        document.body.style.backgroundImage = `url('${imgUrl}')`;
        // document.body.style.backgroundSize = 'cover';
        // document.body.style.backgroundPosition = 'center';
      } else {
        console.log(`Error fetching random image: ${response.status}`);
      }
    } catch (error) {
      console.error("Error getting random image:", error);
    }
  }

  bgSearchBtn.addEventListener("click", (e) => {
    const search = bgSearchInput.value;
    randomImg(search);
    bgSearchInput.value = "";
  });

  bgBtn.addEventListener("click", () => {
    randomImg();
    console.log("random btn click");
  });

  // Call randomImg function with a search query (replace 'yourSearchQuery' with an actual search query)
  randomImg();
});
