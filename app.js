const http = require("http");
const fs = require("fs"); //file handling
const port = 3000;
//import { bootsrap } from "../DevEnv/css";

const server = http.createServer(function(req, res) {
  //telling the browser that we send an HTML file so it parces it like HTML
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write("File not found!");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function(error) {
  if (error) {
    console.log("Something went wrong...");
  } else {
    console.log("Server is listening on port " + port);
  }
});
