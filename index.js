const express = require("express");
const app = express();
const http = require("http").Server(app);
const bodyParser = require("body-parser");
app.use("/", express.static("client"));

//Following two lines are for body-parser so we can understand objects through
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



console.log("running 3000");

http.listen(3000);

app.post("/", (request,response) => {
console.log("Request is coming ");
var dataTosend = {
  message:"I recived your equest"
}
response.send(dataTosend);
console.log(request.body.FirstName);
console.log(request.body.LastName);



});
app.post("/numberSaver", (request,response) => {
  console.log("Request Coming");
let clientNumber = request.body.userNumber;
console.log(clientNumber);
response.send(clientNumber);


});
