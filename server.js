const express = require("express");
var bodyParser = require("body-parser");
var path = require("path") 
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (request, response) => {
  response.sendFile('index.html');
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});