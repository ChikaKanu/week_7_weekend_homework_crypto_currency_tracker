const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const CryptoCurrency = function () {
  this.cryptoCurrencydata = [];
};


CryptoCurrency.prototype.getData = function () {
  const request = new RequestHelper('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  request.get().then((data) => {
    this.cryptoCurrencydata = data;
    PubSub.publish('CryptoCurrency:data-ready', this.cryptoCurrencydata);

  });

};


module.exports = CryptoCurrency;
