const http = require("http");
const fs = require("fs");

var main = fs.readFileSync("../Client-Side/pages/main.html", "utf8");
var maincss = fs.readFileSync("../Client-Side/styles/main.css", "utf8");
var mainjs = fs.readFileSync("../Client-Side/scripts/main.js", "utf8");
var welcome = fs.readFileSync("../Client-Side/pages/welcome.html", "utf8");

http
  .createServer((req, res) => {
    //#region GET
    if (req.method === "GET") {
      switch (req.url) {
        case "/":
        case "/main.html":
        case "Client-Side/main.html":
        case "Welcome Form/Client-Side/main.html":
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(main);
          break;
        case "/main.css":
        case "Client-Side/main.css":
        case "Welcome Form/Client-Side/main.css":
          res.writeHead(200, { "Content-Type": "text/css" });
          res.write(maincss);
          break;
        case "/main.js":
        case "Client-Side/main.js":
        case "Welcome Form/Client-Side/main.js":
          res.writeHead(200, { "Content-Type": "text/javascript" });
          res.write(mainjs);
          break;
        default:
          res.writeHead(404, { "Content-Type": "text/plain" });
      }
      res.end();
    }
    //#endregion
    //#region POST
    else if (req.method === "POST") {
      let UserName = "";
      let Email = "";
      let Address = "";
      let Phone = "";

      req.on("data", (data) => {
        console.log(data.toString());
        UserName = data.toString().split("&")[0].split("=")[1];
        Email = data.toString().split("&")[1].split("=")[1];
        Address = data.toString().split("&")[2].split("=")[1];
        Phone = data.toString().split("&")[3].split("=")[1];
        console.log(UserName, Email, Address, Phone);
        let User = welcome.replace("{UserName}", UserName);
        User = User.replace("{Email}", Email);
        User = User.replace("{Address}", Address);
        User = User.replace("{Phone}", Phone);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(User);
        res.end();
      });
    }
    //#endregion
    else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 Not Found");
    }
  })
  .listen(3000, () => {
    console.log("http://localhost:3000");
  });
