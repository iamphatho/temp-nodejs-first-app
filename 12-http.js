const http = require("http");

const server = http.createServer((req, res, err) => {
  if (req.url === "/") {
    res.writeHead(200);
    res.end("Welcome to my Homepage");
  }
  if (req.url === "/about") {
    res.writeHead(200);
    res.end("Welcome to my About page");
  }
  if (err) {
    res.writeHead(404);
    res.write(`<h1>Opps! 404</h1>`);
  }
});

server.listen(8080);

console.log("You can access localhost:8080 NOW!!");
