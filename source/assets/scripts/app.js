// Create a request variable and assign a new XMLHttpRequest object to it.
const request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://localhost:3000/Panels', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
    data.forEach(todo => {
        console.log(todo.list);
    });
    } else {
    console.log('error');
    }
  }


// Send request
request.send();
