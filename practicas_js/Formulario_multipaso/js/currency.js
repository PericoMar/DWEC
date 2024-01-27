import CurrencyAPI from '../node_modules/@everapi/currencyapi-js';

const currencyApi = new CurrencyAPI('cur_live_lm10KU6YDnIUoahvrvaLcytRAdhIPv0OUYGJtIyr');

console.log(currencyApi);

currencyApi.latest({
    base_currency: baseCurrencyInput.value.trim(),
    currencies: currenciesInput.value.replaceAll(' ', '')
}).then(response => {
    let currencies = Object.keys(response.data);
    let resultHTML = '';

    for (let currency of currencies) {
        resultHTML += `<div class="flex items-center justify-between py-2">
            <strong>${currency}:</strong>
            <span>${response.data[currency].value}</span>
        </div>`;
    }
    latestRatesDisplay.innerHTML = resultHTML;
});
