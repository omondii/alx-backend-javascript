// A simple HTTP server using the http module
const http = require('http');

const server = http.createServer((req, res) => {
   console.log('Request made');
});

server.listen(1245, 'localhost', () => {
   console.log('Listening on port 1245')
})