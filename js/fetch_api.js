// To test the API, you can use the Fetch API in JavaScript.

// First request: to root "/"
fetch('http://127.0.0.1:8000', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log('Root API response:', data))
.catch(error => console.error('Error in root request:', error));

// Second request: to "/visits"
fetch('http://127.0.0.1:8000/visits/1', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log('Visits API response:', data))
.catch(error => console.error('Error in visits request:', error));

fetch('http://127.0.0.1:8000/visits/2', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log('Visits API response:', data))
.catch(error => console.error('Error in visits request:', error));

fetch('http://127.0.0.1:8000/visits/3', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log('Visits API response:', data))
.catch(error => console.error('Error in visits request:', error));


// Second request: to "/patients"
fetch('http://127.0.0.1:8000/patients/', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log('Patients API response:', data))
.catch(error => console.error('Error in patients request:', error));

