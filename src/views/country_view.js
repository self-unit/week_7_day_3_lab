const PubSub = require('../helpers/pub_sub.js')

const CountryView = function(element) {
  this.element = element;
}

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:country-details', (event) => {
    const country = event.detail;
    this.render(country);
  });
};

CountryView.prototype.render = function (countryData) {
  this.element.innerHTML = '';

  const countryName = document.createElement('h1');
  countryName.textContent = `${countryData.name} - ${countryData.nativeName}`;
  this.element.appendChild(countryName);

  const flagImg = document.createElement('img');
  flagImg.src = countryData.flag;
  flagImg.height = 150;
  flagImg.width = 300;
  this.element.appendChild(flagImg);

  const regionTitle = document.createElement('h2');
  regionTitle.textContent = 'Region:'
  this.element.appendChild(regionTitle);

  const countryRegion = document.createElement('p');
  countryRegion.textContent = countryData.region;
  this.element.appendChild(countryRegion);

  const languageTitle = document.createElement('h2');
  languageTitle.textContent = 'Languages:'
  this.element.appendChild(languageTitle);

  const languageList = document.createElement('ul');
  countryData.languages.forEach((language) => {
    const languageItem = document.createElement('li');
    languageItem.textContent = language.name;
    languageList.appendChild(languageItem);
  });

  this.element.appendChild(languageList);
};

module.exports = CountryView;
