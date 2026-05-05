const http = require('http');

const PORT = process.env.PORT || 8080;

http.createServer((req, res) => {
  const url = req.url;

  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (url === '/') {
    res.write('<h1>Welcome to the Home Page of Khushwant</h1>');
  } else if (url === '/hello') {
    res.write('<h1>Hello World!</h1>');
  } else if (url === '/frrr') {
    res.write('<h1>Special Page: frrr!</h1>');
  } else {
    res.statusCode = 404;
    res.write('<h1>404 Not Found</h1>');
  }

  res.end();
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
