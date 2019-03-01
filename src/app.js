const RequestHelper = require('./helpers/request_helper.js');
const CryptoCurrency = require('./models/crypto_currency.js');
const CurrencyListView = require('./views/currency_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#crypto')
  const selectView = new CurrencyListView(selectElement);
  selectView.bindEvents();

  const cryptoCurrency = new CryptoCurrency;
  cryptoCurrency.getData();



});
