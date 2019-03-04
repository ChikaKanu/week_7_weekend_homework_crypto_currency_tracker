const PubSub = require('../helpers/pub_sub.js');
const CryptoCurrency = require('../models/crypto_currency.js');

const CryptoChartDisplay = function () {
  this.cryptoArray = []
};


CryptoChartDisplay.prototype.bindEvents = function () {


  PubSub.subscribe('CryptoCurrency:first-crypto-selected', (evt) => {
    const cryptoOne = evt.detail;
    this.cryptoArray.push(cryptoOne);
  });

  PubSub.subscribe('CryptoCurrency:second-crypto-selected', (evt) => {
    const cryptoTwo = evt.detail;
    this.cryptoArray.push(cryptoTwo);
  });

  PubSub.subscribe('CryptoCurrency:third-crypto-selected', (evt) => {
    const cryptoThree = evt.detail;
    this.cryptoArray.push(cryptoThree);
  });

  const selectedCryptosArray = this.cryptoArray;
  console.log(selectedCryptosArray);

};



CryptoChartDisplay.prototype.populateSelect = function (cryptos, index) {
  cryptos.forEach((crypto, index) => {
    const option = document.createElement('option');
    option.textContent = crypto.name;
    option.value = index;
    this.element.appendChild(option);
  });
};


module.exports = CryptoChartDisplay;
