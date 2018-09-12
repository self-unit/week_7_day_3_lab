const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Countries = function(){
  this.data = null;
};

Countries.prototype.bindEvents = function () {
  // Get countries list
  const request = new Request('https://restcountries.eu/rest/v2/');
  request.get((data) => {
    this.data = data;
    const countryNames = data.map(country => country.name);
    PubSub.publish('Countries:countries-list', countryNames);
  });

  // Get country
  PubSub.subscribe('SelectView:country-select', (event) => {
    const country = this.data[event.detail];
    PubSub.publish('Countries:country-details', country);
  });
};

module.exports = Countries;
