document.addEventListener("DOMContentLoaded", () => {
    const currencyFrom = document.getElementById("currency-from");
    const currencyTo = document.getElementById("currency-to");
    const currencyAmount = document.getElementById("currency-amount");
    const currencyResult = document.getElementById("currency-result");
    const currencyBtn = document.getElementById('currency-btn');
  
    const endpoint = "convert";
    const url = `https://api.exchangeratesapi.io/v1/`;
  
    async function getApiKey() {
      try {
        const response = await fetch("./apiKeys.json");
        if (response.ok) {
          const keyArray = await response.json();
          const apiKey = keyArray[1].currency;
          return apiKey;
        } else {
          throw new Error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    async function convertCurrency() {
      const apiKey = await getApiKey();
      const fromCurrency = currencyFrom.value;
      const toCurrency = currencyTo.value;
      const amount = parseFloat(currencyAmount.value);
  
      if (fromCurrency && toCurrency && amount) {
        try {
          const response = await fetch(
            `${url}${endpoint}?access_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
          );
          if (response.ok) {
            const data = await response.json();
            const result = data.result;
            currencyResult.textContent = result;
            console.log(result);
          } else {
            throw new Error(`Error: ${response.status}`);
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        currencyResult.innerText = 'Fill out all fields';
      }
    }
  
    currencyBtn.addEventListener('click', convertCurrency);
  
    // Initially fetch API key and perform currency conversion
    convertCurrency();
  });
  