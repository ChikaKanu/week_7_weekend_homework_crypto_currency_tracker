const CryptoCurrency = require('./models/crypto_currency.js');
const CurrencyListView = require('./views/currency_list_view.js');
const CryptoPriceChange = require('./views/crypto_price_change.js');
const SecondCryptoSelection = require('./views/second_crypto_selection.js');
const ThirdCryptoSelection = require('./views/third_crypto_selection.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#crypto-select1');
  const selectCryptoPriceView = new CryptoPriceChange(selectElement);
  selectCryptoPriceView.bindEvents();

  const selectElementTwo = document.querySelector('#crypto-select2');
  const selectCryptoPriceViewTwo = new SecondCryptoSelection(selectElementTwo);
  selectCryptoPriceViewTwo.bindEvents();

  const selectElementThree = document.querySelector('#crypto-select3');
  const selectCryptoPriceViewThree = new ThirdCryptoSelection(selectElementThree);
  selectCryptoPriceViewThree.bindEvents();

  const listContainer = document.querySelector('div#crypto-list');
  const selectView = new CurrencyListView(listContainer);
  selectView.bindEvents();

  const cryptoCurrency = new CryptoCurrency;
  cryptoCurrency.getData();



});
