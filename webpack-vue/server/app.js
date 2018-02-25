var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get("/getnewslist",function (req,res,next) {
    var newslist ="from server data";
    res.send({ newslist:newslist});
});

app.listen(8388,'127.0.0.1',function () {
    console.log("server is running");
});
