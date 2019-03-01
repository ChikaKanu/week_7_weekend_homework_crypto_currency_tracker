const RequestHelper = function (url) {
  this.url = url
};

RequestHelper.prototype.get = function (data) {
  return fetch(this.url)
  .then(response => response.json());
};

module.exports = RequestHelper;
