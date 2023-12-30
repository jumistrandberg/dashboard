document.addEventListener("DOMContentLoaded", () => {
    
  // Get the elements
  const currencyFrom = document.getElementById("currency-from");
  const currencyTo = document.getElementById("currency-to");
  const currencyAmount = document.getElementById("currency-amount");
  const currencyResult = document.getElementById("currency-result");
  const currencyBtn = document.getElementById('currency-btn'); 

  // endpoint to convert
  const endpoint = "convert";

  // Get the base URL
  const url = `https://api.exchangeratesapi.io/v1/`;

  // Fetch the API key
  async function getApiKey() {
    const response = await fetch("./apiKeys.json");
    if (response.ok) {
      const keyArray = await response.json();
      const ApiKey = keyArray[1].currency;
      return ApiKey;
    } else {
      console.log(`Error: ${response.status}`);
    }
  }

  //   Function to get the exchange result and display
  async function convertCurrency() {
    // Get the key
    const apiKey = await getApiKey();

    // Get the user values 
    const fromCurrency = currencyFrom.value;
    const toCurrency = currencyTo.value;
    const amount = currencyAmount.value;

    const response = await fetch(
      `${endpoint}?access_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
    );
    const data = await response.json();

    if (response.ok) {
      const jsonResult = await response.json();
      const result = jsonResult.result;
      currencyResult.textContent = result;
      console.log(result);
    } else {
      console.log(`Error: ${response.status}`);
    }
  }

  // Listen for click on button 
  currencyBtn.addEventListener('click', () => {
    currencyResult.innerText = '';
     // Get the user values 
     const fromCurrency = currencyFrom.value;
     const toCurrency = currencyTo.value;
     const amount = currencyAmount.value;
    if(fromCurrency !== '' && toCurrency !== '' && amount !== '') {
        convertCurrency();
    } else {
        currencyResult.innerText = 'Fill out all fields';
    }
  })
  

  //   const access_key = 'API_KEY'; // Replace 'API_KEY' with your actual API key

  //   const from = 'EUR';
  //   const to = 'GBP';
  //   const amount = '10';

  //   async function performConversion() {
  //     try {
  //       const response = await fetch(url, {
  //         method: 'GET',
  //         dataType: 'jsonp',
  //       });

  //       if (response.ok) {
  //         const json = await response.json();
  //         const result = json.result;
  //         alert(result); // Access the conversion result
  //       } else {
  //         throw new Error('Network response was not ok.');
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   }

  //   performConversion();

  convertCurrency();
  getApiKey();
});
