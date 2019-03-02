const PubSub = require('../helpers/pub_sub.js');
const CurrencyView = require('./currency_view.js');

const CurrencyListView = function (container) {
  this.container = container;
};

CurrencyListView.prototype.bindEvents = function () {
  PubSub.subscribe('CryptoCurrency:data-ready', (evt) => {
    this.clearList();
    const cryptos = evt.detail;
    this.render(cryptos);
  });
};

CurrencyListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

CurrencyListView.prototype.render = function (cryptos) {
  cryptos.forEach((crypto) => {
    const cryptoCurrencyItem = new CurrencyView(cryptos);
    cryptoCurrencyItem.createCryptoCurrencyItem(crypto);
  });
};


module.exports = CurrencyListView;

// CurrencyListView.prototype.bindEvents = function () {
//   PubSub.subscribe('CryptoCurrency:data-ready', (evt) => {
//       // this.clearList();
//         console.log(evt.detail);
//   this.renderCryptoCurrencyData(evt.detail)
// });
//
// };
//
// // CurrencyListView.prototype.clearList = function () {
// //   this.container.innerHTML = '';
// // };
//
// CurrencyListView.prototype.renderCryptoCurrencyData = function () {//removed the parameter(cryptos)
//   this.cryptoCurrency.forEach((crypto) => {//changed (cryptos) to (this.cryptoCurrency)
//     const cryptoCurrencyItemDetail = new CurrencyView(this.container, crypto);//introduced as workaround
//             console.log(cryptoCurrencyItemDetail);
//     cryptoCurrencyItemDetail.createCryptoCurrencyDetail();//work around the appenChild issue
//     // const cryptoCurrencyItem = this.createCryptoItem(crypto);
//     // this.container.appendChild(cryptoCurrencyItem);
//   });
// };
// //
// // CurrencyListView.prototype.createCryptoItem = function (crypto) {
// //   const cryptoCurrencyDetail = new CurrencyView();
// //   console.log(cryptoCurrencyDetail);
// //   const cryptoCurrencyView = cryptoCurrencyDetail.createCryptoCurrencyDetail(crypto);
// //   return cryptoCurrencyView;
// // };
//
