const CryptoCurrency = require('./models/crypto_currency.js');
const CurrencyListView = require('./views/currency_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('div#crypto-list')
  const selectView = new CurrencyListView(listContainer);
  selectView.bindEvents();

  const cryptoCurrency = new CryptoCurrency;
  cryptoCurrency.getData();



});
