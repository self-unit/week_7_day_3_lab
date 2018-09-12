const Request = function(url) {
  this.url = url;
};

Request.prototype.get = function (onComplete) {
  xhr = new XMLHttpRequest(); // new HTTP request
  xhr.open('GET', this.url); // opens the request with the request information (RequestType, URL)
  xhr.setRequestHeader('Accept', 'application/json'); // set a new header, 'accept', to JSON. Returns just JSON data.
  xhr.send(); // send the request

  xhr.addEventListener('load', () => { // to avoid asynchronous request pausing the page state
    if (xhr.status !== 200) { // if page is not loaded
      return;
    }
    // page has loaded
    const jsonString = xhr.responseText; // output
    const data = JSON.parse(jsonString); // parse the string into a JSON object
    onComplete(data);
  });
};

module.exports = Request;
