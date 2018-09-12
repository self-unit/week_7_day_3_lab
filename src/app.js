const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const CountryView = require('./views/country_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries();
  countries.getData();
  console.log('countries:', countries);

  const selectCountries = document.querySelector('#countries');
  const selectView = new SelectView(selectCountries);
  selectView.bindEvents();
  console.log('select view:', selectView);

  const countryContainer = document.querySelector('#country');
  const countryView = new CountryView(countryContainer);
  console.log('country view:', countryView);
});
