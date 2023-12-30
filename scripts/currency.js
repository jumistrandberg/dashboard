document.addEventListener("DOMContentLoaded", () => {
  // Get the elements
    const currencyFrom = document.getElementById('currency-from'); 
    const currencyTo = document.getElementById('currency-to');
    const currencyAmount = document.getElementById('currency-amount'); 
    const currencyResult = document.getElementById('currency-result');

  // endpoint to convert
  const endpoint = "convert";

  // Get the base URL
  const url = `https://api.exchangeratesapi.io/v1/${endpoint}?access_key=${apiKey}&from=${from}&to=${to}&amount=${amount}`; //   endpoint for conversion

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

  getApiKey();
});
