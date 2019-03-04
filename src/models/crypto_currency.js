const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const CryptoCurrency = function () {
  this.cryptoCurrencyData = [];
  this.changePrice = [];
};



CryptoCurrency.prototype.getData = function () {
  const request = new RequestHelper('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  request.get().then((data) => {
    this.cryptoCurrencyData = data;
    PubSub.publish('CryptoCurrency:data-ready', this.cryptoCurrencyData);
    this.publishData(data);

    PubSub.subscribe('CryptoPriceChange:change-first', (evt) => {
      const selectedCryptoDetailFirst = this.cryptoCurrencyData[evt.detail];
      PubSub.publish('CryptoCurrency:first-crypto-selected', selectedCryptoDetailFirst);
    });

    PubSub.subscribe('CryptoPriceChange:change-second', (evt) => {
      const selectedCryptoDetailSecond = this.cryptoCurrencyData[evt.detail];
      PubSub.publish('CryptoCurrency:second-crypto-selected', selectedCryptoDetailSecond);
    });

    PubSub.subscribe('CryptoPriceChange:change-third', (evt) => {
      const selectedCryptoDetailThird = this.cryptoCurrencyData[evt.detail];
      PubSub.publish('CryptoCurrency:third-crypto-selected', selectedCryptoDetailThird);
    });
  });

  CryptoCurrency.prototype.publishData = function (data) {
    this.cryptoCurrencyData = data;
    PubSub.publish('CryptoCurrency: change-in-price-data-ready', this.cryptoCurrencyData);
  };


};

module.exports = CryptoCurrency;
