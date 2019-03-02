const CurrencyView = function (){};

CurrencyView.prototype.createCryptoCurrencyItem = function (crypto) {
  const cryptoCurrencyDetail = document.createElement('div');

  const cryptoList = document.querySelector(`#crypto-list`);
  cryptoList.appendChild(cryptoCurrencyDetail)

  const name = document.createElement('h3');
  name.textContent = crypto.name;
  cryptoCurrencyDetail.appendChild(name);

  const detailList = document.createElement('ul');

  const id = this.createDetailListItem("id", crypto.id);
  detailList.appendChild(id);

  const symbol = this.createDetailListItem("symbol", crypto.symbol);
  detailList.appendChild(symbol);

  const current_price = this.createDetailListItem("current_price", crypto.current_price);
  detailList.appendChild(current_price);

  const market_cap_rank = this.createDetailListItem("market_cap_rank", crypto.market_cap_rank);
  detailList.appendChild(market_cap_rank);

  const high_24h = this.createDetailListItem("high_24h", crypto.high_24h);
  detailList.appendChild(high_24h);

  const low_24h = this.createDetailListItem("low_24h", crypto.low_24h);
  detailList.appendChild(low_24h);

  const price_change_24h = this.createDetailListItem("price_change_24h", crypto.price_change_24h);
  detailList.appendChild(price_change_24h);

  cryptoCurrencyDetail.appendChild(detailList);


};

CurrencyView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};



module.exports = CurrencyView;
