// Listener on page load
document.addEventListener('DOMContentLoaded', () => {
    // Retrieves various elements from the dom
    const form = document.getElementById('currency-form');
    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const resultDiv = document.getElementById('result');

    const apiKey = 'c2fe427c5ba67e1fbf0a390f';//'YOUR_API_KEY_HERE'; // Replace with your actual API key
    // API source
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    // Fetch the list of currencies and populate the select
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.conversion_rates);
            console.log(data);
            currencies.forEach(currency => {
                const option1 = document.createElement('option');
                const option2 = document.createElement('option');
                option1.value = option2.value = currency;
                option1.textContent = option2.textContent = currency;
                fromCurrency.appendChild(option1);
                toCurrency.appendChild(option2);
            });
        });
});
