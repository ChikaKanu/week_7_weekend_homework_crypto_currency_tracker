const PubSub = require('../helpers/pub_sub.js');
const CryptoCurrency = require('../models/crypto_currency.js');

const ThirdCryptoSelection = function (element) {
  this.element = element;
};


ThirdCryptoSelection.prototype.bindEvents = function () {
  PubSub.subscribe('CryptoCurrency: change-in-price-data-ready', (evt) => {
    this.populateSelect(evt.detail)
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('CryptoPriceChange:change-third', selectedIndex);
  });
};

ThirdCryptoSelection.prototype.populateSelect = function (cryptos, index) {
  cryptos.forEach((crypto, index) => {
    const option = document.createElement('option');
    option.textContent = crypto.name;
    option.value = index;
    this.element.appendChild(option);
  });
};


module.exports = ThirdCryptoSelection;
