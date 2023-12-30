document.addEventListener('DOMContentLoaded', () => {
  // Get the base URL
  const apiUrl =
    'https://api.exchangeratesapi.io/v1/latest?access_key=';

  async function getApiKey() {
    const response = await fetch('./apiKeys.json');
    if (response.ok) {
      const keyArray = await response.json();
      const ApiKey = keyArray[1].currency;
      return ApiKey;
    } else {
      console.log(`Error: ${response.status}`);
    }
  }

  getApiKey();
});
