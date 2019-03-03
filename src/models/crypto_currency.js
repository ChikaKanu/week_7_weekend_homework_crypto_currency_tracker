const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const CryptoCurrency = function () {
  this.cryptoCurrencydata = [];
  this.changePrice = [];
};


CryptoCurrency.prototype.getData = function () {
  const request = new RequestHelper('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  request.get().then((data) => {
    this.cryptoCurrencydata = data;
    PubSub.publish('CryptoCurrency:data-ready', this.cryptoCurrencydata);
    this.publishData(data);
  });
};

CryptoCurrency.prototype.publishData = function (data) {
  this.cryptoCurrencydata = data;
  PubSub.publish('CryptoCurrency: change-in-price-data-ready', this.cryptoCurrencydata);
};

CryptoCurrency.prototype.bindEvents = function () {
  PubSub.subscribe('CryptoPriceChange:change-first', (evt) => {
    const firstSelectCrypto = evt.detail;
  });

  PubSub.subscribe('CryptoPriceChange:change-second', (evt) => {
    const secondSelectCrypto = evt.detail;
  });

  PubSub.subscribe('CryptoPriceChange:change-third', (evt) => {
    const thirdSelectCrypto = evt.detail;
  });
  console.log(thirdSelectCrypto);
};

module.exports = CryptoCurrency;
