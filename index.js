const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello kube\n")
});

server.listen(4000, () => {
  console.log("Server listen on port 4000")
})
