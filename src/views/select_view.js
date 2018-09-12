const PubSub = require('../helpers/pub_sub.js')
const SelectView = function(element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-list', (event) => {
    const countryNames = event.detail;
    this.populate(countryNames);
  });

  this.element.addEventListener('change', (event) => {
    const index = event.target.value;
    PubSub.publish('SelectView:country-select', index);
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
