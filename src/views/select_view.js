const PubSub = require('../helpers/pub_sub.js')
const SelectView = function(element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-list', (event) => {
    console.log('Im subscribed :D');
    const countryNames = event.detail;
    console.log(countryNames);
    this.populate(countryNames);
  });
};

SelectView.prototype.populate = function (countryNames) {
  countryNames.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
