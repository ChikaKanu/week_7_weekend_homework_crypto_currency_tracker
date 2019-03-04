/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const CryptoCurrency = __webpack_require__(/*! ./models/crypto_currency.js */ \"./src/models/crypto_currency.js\");\nconst CurrencyListView = __webpack_require__(/*! ./views/currency_list_view.js */ \"./src/views/currency_list_view.js\");\nconst CryptoPriceChange = __webpack_require__(/*! ./views/crypto_price_change.js */ \"./src/views/crypto_price_change.js\");\nconst CryptoChartDisplay = __webpack_require__(/*! ./views/crypto_chart_display.js */ \"./src/views/crypto_chart_display.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const selectElement = document.querySelector('#crypto-select1');\n  const selectCryptoPriceView = new CryptoPriceChange(selectElement);\n  selectCryptoPriceView.bindEvents();\n\n  const selectElementTwo = document.querySelector('#crypto-select2');\n  const selectCryptoPriceViewTwo = new CryptoPriceChange(selectElementTwo);\n  selectCryptoPriceViewTwo.bindEvents();\n\n  const selectElementThree = document.querySelector('#crypto-select3');\n  const selectCryptoPriceViewThree = new CryptoPriceChange(selectElementThree);\n  selectCryptoPriceViewThree.bindEvents();\n\n  const listContainer = document.querySelector('div#crypto-list');\n  const selectView = new CurrencyListView(listContainer);\n  selectView.bindEvents();\n\n  const cryptoChart = new CryptoChartDisplay;\n  cryptoChart.bindEvents();\n\n  const cryptoCurrency = new CryptoCurrency;\n  cryptoCurrency.getData();\n\n\n\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url\n};\n\nRequestHelper.prototype.get = function (data) {\n  return fetch(this.url)\n  .then(response => response.json());\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/crypto_currency.js":
/*!***************************************!*\
  !*** ./src/models/crypto_currency.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst CryptoCurrency = function () {\n  this.cryptoCurrencyData = [];\n  this.changePrice = [];\n};\n\n\n\nCryptoCurrency.prototype.getData = function () {\n  const request = new RequestHelper('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');\n  request.get().then((data) => {\n    this.cryptoCurrencyData = data;\n    PubSub.publish('CryptoCurrency:data-ready', this.cryptoCurrencyData);\n    this.publishData(data);\n\n    PubSub.subscribe('CryptoPriceChange:change-first', (evt) => {\n      const selectedCryptoDetailFirst = this.cryptoCurrencyData[evt.detail];\n      PubSub.publish('CryptoCurrency:first-crypto-selected', selectedCryptoDetailFirst);\n    });\n\n    PubSub.subscribe('CryptoPriceChange:change-second', (evt) => {\n      const selectedCryptoDetailSecond = this.cryptoCurrencyData[evt.detail];\n      PubSub.publish('CryptoCurrency:second-crypto-selected', selectedCryptoDetailSecond);\n    });\n\n    PubSub.subscribe('CryptoPriceChange:change-third', (evt) => {\n      const selectedCryptoDetailThird = this.cryptoCurrencyData[evt.detail];\n      PubSub.publish('CryptoCurrency:third-crypto-selected', selectedCryptoDetailThird);\n    });\n  });\n\n  CryptoCurrency.prototype.publishData = function (data) {\n    this.cryptoCurrencyData = data;\n    PubSub.publish('CryptoCurrency: change-in-price-data-ready', this.cryptoCurrencyData);\n  };\n\n\n};\n\nmodule.exports = CryptoCurrency;\n\n\n//# sourceURL=webpack:///./src/models/crypto_currency.js?");

/***/ }),

/***/ "./src/views/crypto_chart_display.js":
/*!*******************************************!*\
  !*** ./src/views/crypto_chart_display.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst CryptoCurrency = __webpack_require__(/*! ../models/crypto_currency.js */ \"./src/models/crypto_currency.js\");\n\nconst CryptoChartDisplay = function () {\n  this.cryptoArray = []\n};\n\n\nCryptoChartDisplay.prototype.bindEvents = function () {\n\n\n  PubSub.subscribe('CryptoCurrency:first-crypto-selected', (evt) => {\n    const cryptoOne = evt.detail;\n    this.cryptoArray.push(cryptoOne);\n  });\n\n  PubSub.subscribe('CryptoCurrency:second-crypto-selected', (evt) => {\n    const cryptoTwo = evt.detail;\n    this.cryptoArray.push(cryptoTwo);\n  });\n\n  PubSub.subscribe('CryptoCurrency:third-crypto-selected', (evt) => {\n    const cryptoThree = evt.detail;\n    this.cryptoArray.push(cryptoThree);\n  });\n\n  const selectedCryptosArray = this.cryptoArray;\n  console.log(selectedCryptosArray);\n\n};\n\n\n\nCryptoChartDisplay.prototype.populateSelect = function (cryptos, index) {\n  cryptos.forEach((crypto, index) => {\n    const option = document.createElement('option');\n    option.textContent = crypto.name;\n    option.value = index;\n    this.element.appendChild(option);\n  });\n};\n\n\nmodule.exports = CryptoChartDisplay;\n\n\n//# sourceURL=webpack:///./src/views/crypto_chart_display.js?");

/***/ }),

/***/ "./src/views/crypto_price_change.js":
/*!******************************************!*\
  !*** ./src/views/crypto_price_change.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst CryptoCurrency = __webpack_require__(/*! ../models/crypto_currency.js */ \"./src/models/crypto_currency.js\");\n\nconst CryptoPriceChange = function (element) {\n  this.element = element;\n};\n\n\nCryptoPriceChange.prototype.bindEvents = function () {\n  PubSub.subscribe('CryptoCurrency: change-in-price-data-ready', (evt) => {\n    this.populateSelect(evt.detail)\n  });\n\n  this.element.addEventListener('change', (evt) => {\n    const selectedIndex = evt.target.value;\n    PubSub.publish('CryptoPriceChange:change', selectedIndex);\n  });\n\n  this.element.addEventListener('change', (evt) => {\n    const selectedIndex = evt.target.value;\n    PubSub.publish('CryptoPriceChange:change-first', selectedIndex);\n  });\n\n  this.element.addEventListener('change', (evt) => {\n    const selectedIndex = evt.target.value;\n    PubSub.publish('CryptoPriceChange:change-second', selectedIndex);\n  });\n\n  this.element.addEventListener('change', (evt) => {\n    const selectedIndex = evt.target.value;\n    PubSub.publish('CryptoPriceChange:change-third', selectedIndex);\n  });\n\n  \n};\n\nCryptoPriceChange.prototype.populateSelect = function (cryptos, index) {\n  cryptos.forEach((crypto, index) => {\n    const option = document.createElement('option');\n    option.textContent = crypto.name;\n    option.value = index;\n    this.element.appendChild(option);\n  });\n};\n\n\nmodule.exports = CryptoPriceChange\n\n\n//# sourceURL=webpack:///./src/views/crypto_price_change.js?");

/***/ }),

/***/ "./src/views/currency_list_view.js":
/*!*****************************************!*\
  !*** ./src/views/currency_list_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst CurrencyView = __webpack_require__(/*! ./currency_view.js */ \"./src/views/currency_view.js\");\n\nconst CurrencyListView = function (container) {\n  this.container = container;\n};\n\nCurrencyListView.prototype.bindEvents = function () {\n  PubSub.subscribe('CryptoCurrency:data-ready', (evt) => {\n    this.clearList();\n    const cryptos = evt.detail;\n    this.render(cryptos);\n  });\n};\n\nCurrencyListView.prototype.clearList = function () {\n  this.container.innerHTML = '';\n};\n\nCurrencyListView.prototype.render = function (cryptos) {\n  cryptos.forEach((crypto) => {\n    const cryptoCurrencyItem = new CurrencyView(cryptos);\n    cryptoCurrencyItem.createCryptoCurrencyItem(crypto);\n  });\n};\n\n\nmodule.exports = CurrencyListView;\n\n// CurrencyListView.prototype.bindEvents = function () {\n//   PubSub.subscribe('CryptoCurrency:data-ready', (evt) => {\n//       // this.clearList();\n//         console.log(evt.detail);\n//   this.renderCryptoCurrencyData(evt.detail)\n// });\n//\n// };\n//\n// // CurrencyListView.prototype.clearList = function () {\n// //   this.container.innerHTML = '';\n// // };\n//\n// CurrencyListView.prototype.renderCryptoCurrencyData = function () {//removed the parameter(cryptos)\n//   this.cryptoCurrency.forEach((crypto) => {//changed (cryptos) to (this.cryptoCurrency)\n//     const cryptoCurrencyItemDetail = new CurrencyView(this.container, crypto);//introduced as workaround\n//             console.log(cryptoCurrencyItemDetail);\n//     cryptoCurrencyItemDetail.createCryptoCurrencyDetail();//work around the appenChild issue\n//     // const cryptoCurrencyItem = this.createCryptoItem(crypto);\n//     // this.container.appendChild(cryptoCurrencyItem);\n//   });\n// };\n// //\n// // CurrencyListView.prototype.createCryptoItem = function (crypto) {\n// //   const cryptoCurrencyDetail = new CurrencyView();\n// //   console.log(cryptoCurrencyDetail);\n// //   const cryptoCurrencyView = cryptoCurrencyDetail.createCryptoCurrencyDetail(crypto);\n// //   return cryptoCurrencyView;\n// // };\n//\n\n\n//# sourceURL=webpack:///./src/views/currency_list_view.js?");

/***/ }),

/***/ "./src/views/currency_view.js":
/*!************************************!*\
  !*** ./src/views/currency_view.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const CurrencyView = function (){};\n\nCurrencyView.prototype.createCryptoCurrencyItem = function (crypto) {\n  const cryptoCurrencyDetail = document.createElement('div');\n\n  const cryptoList = document.querySelector(`#crypto-list`);\n  cryptoList.appendChild(cryptoCurrencyDetail)\n\n  const name = document.createElement('h3');\n  name.textContent = crypto.name;\n  cryptoCurrencyDetail.appendChild(name);\n\n  const detailList = document.createElement('ul');\n\n  const id = this.createDetailListItem(\"id\", crypto.id);\n  detailList.appendChild(id);\n\n  const symbol = this.createDetailListItem(\"symbol\", crypto.symbol);\n  detailList.appendChild(symbol);\n\n  const current_price = this.createDetailListItem(\"current_price\", crypto.current_price);\n  detailList.appendChild(current_price);\n\n  const market_cap_rank = this.createDetailListItem(\"market_cap_rank\", crypto.market_cap_rank);\n  detailList.appendChild(market_cap_rank);\n\n  const high_24h = this.createDetailListItem(\"high_24h\", crypto.high_24h);\n  detailList.appendChild(high_24h);\n\n  const low_24h = this.createDetailListItem(\"low_24h\", crypto.low_24h);\n  detailList.appendChild(low_24h);\n\n  const price_change_24h = this.createDetailListItem(\"price_change_24h\", crypto.price_change_24h);\n  detailList.appendChild(price_change_24h);\n\n  cryptoCurrencyDetail.appendChild(detailList);\n\n\n};\n\nCurrencyView.prototype.createDetailListItem = function (label, property) {\n  const element = document.createElement('li');\n  element.textContent = `${label}: ${property}`;\n  return element;\n};\n\n\n\nmodule.exports = CurrencyView;\n\n\n//# sourceURL=webpack:///./src/views/currency_view.js?");

/***/ })

/******/ });