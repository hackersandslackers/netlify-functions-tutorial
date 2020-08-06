let endpoint = "http://example.com"


// HTTP Client to create requests.
let HttpClient = function() {
  this.get = function(url, callback) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4 && httpRequest.status === 200)
        callback(httpRequest.responseText);
      }
    httpRequest.open("GET", url, true);
    httpRequest.send(null);
  }
}

// Invoke on page load.
export const onRouteUpdate = ({location}) => {
  let bodyElement = document.getElementById('main');
  if (bodyElement) {
    let client = new HttpClient();
    client.get(endpoint, function(response) {
      bodyElement.innerHTML = '<p>' + response + '</p>'
    });
  }
}