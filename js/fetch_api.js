// To test the API, you can use the Fetch API in JavaScript.

fetch('http://127.0.0.1:8000', {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log('API response:', data))
.catch(error => console.error('Error:', error));
