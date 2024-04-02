const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client-Side/pages/main.html"));
});

app.get("/main.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client-Side/styles/main.css"));
});

app.get("/main.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client-Side/scripts/main.js"));
});

app.get("*", (req, res) => {
  res.send("404 not found");
});

app.post("/welcome.html", (req, res) => {
  var file = fs.readFileSync(
    path.join(__dirname, "../Client-Side/pages/welcome.html"),
    "utf8"
  );
  file = file.replace("{UserName}", req.body.name);
  file = file.replace("{Email}", req.body.email);
  file = file.replace("{Address}", req.body.address);
  file = file.replace("{Phone}", req.body.phone);

  res.send(file);
  res.redirect("/welcome.html");
});

app.listen(port, () => {
  console.log("http://localhost:3000");
});
