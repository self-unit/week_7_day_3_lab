const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Countries = function(){
  this.data = null;
};

Countries.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/');
  request.get((data) => {
    this.data = data;
    const countryNames = data.map(country => country.name);
    PubSub.publish('Countries:countries-list', countryNames);
  });
};

module.exports = Countries;
