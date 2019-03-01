const PubSub = require('../helpers/pub_sub.js');

const CurrencyListView = function (element) {
this.element = element;
};

CurrencyListView.prototype.bindEvents = function () {
  PubSub.subscribe('CryptoCurrency:data-ready', (evt) => {
  const currencyList = evt.detail;
  console.log(this.element);
  this.renderCryptoCurrencyData(currencyList)
  })

};





module.exports = CurrencyListView;
