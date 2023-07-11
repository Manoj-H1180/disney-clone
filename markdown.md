`What is Node.js?`

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser.

`2. How do you install Node.js?`

You can download and install Node.js from the official website. You can also use a package manager like npm or yarn to install it.

`3. How do you create a simple HTTP server in Node.js?`

javascriptCopy code
const http = require('http');

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello, World!\\n');
});

server.listen(3000, () => {
console.log('Server running on <http://localhost:3000/>');
});
