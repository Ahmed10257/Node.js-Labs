//Requiring the Built-In Module Http to host our server
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    var url = req.url;
    //Splitting the URL to get the operation and the numbers
    //Getting the Numbers from the URL
    var numbers = url.split("/").slice(2);
    var length = numbers.length;
    //Getting the Operation from the URL
    var operation = url.split("/")[1];

    var result;
    //Checking the operation and performing the calculation
    if (operation === "add") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Addition</h1>");
      result = 0;
      for (i = 0; i < length; i++) {
        result += parseInt(numbers[i]);
      }
      res.write("<h2>Result: " + result + "</h2>");
      fs.appendFile("result.txt", " Result = " + result + "\n", (err) => {
        console.log(err);
      });
      res.end();
    } else if (operation === "sub") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Subtraction</h1>");
      result = 0;
      for (i = 0; i < length; i++) {
        result -= parseInt(numbers[i]);
      }
      res.write("<h2>Result: " + result + "</h2>");
      fs.appendFile("result.txt", " Result = " + result + "\n", (err) => {
        console.log(err);
      });
      res.end();
    } else if (operation === "mul") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Multiplication</h1>");
      result = 1;
      for (i = 0; i < length; i++) {
        result *= parseInt(numbers[i]);
      }
      res.write("<h2>Result: " + result + "</h2>");
      fs.appendFile("result.txt", "Result = " + result + "\n", (err) => {
        console.log(err);
      });
      res.end();
    } else if (operation === "div") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Division</h1>");
      result = 1;
      for (i = 0; i < length; i++) {
        result /= parseInt(numbers[i]);
      }
      res.write("<h2>Result: " + result + "</h2>");
      fs.appendFile("result.txt", " Result = " + result + "\n", (err) => {
        console.log(err);
      });
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>Operation not Supported</h1>");
      res.end();
    }
  })
  .listen(7000);
