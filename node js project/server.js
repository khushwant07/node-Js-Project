const http = require('http');

// Create a server object:
http.createServer((req, res) => {
  const url = req.url;  // Get the request URL

  // Set the response header for HTML content
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Handle different URL paths
  if (url === '/') {
    res.write('<h1>Welcome to the Home Page!</h1>'); // Response for '/'
  } else if (url === '/hello') {
    res.write('<h1>Hello World!</h1>'); // Response for '/hello'
  } else if (url === '/frrr') {
    res.write('<h1>Special Page: frrr!</h1>'); // Response for '/frrr'
  } else {
    res.write('<h1>404 Not Found</h1>'); // Response for unrecognized routes
  }

  res.end(); // End the response
}).listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});
