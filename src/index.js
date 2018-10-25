const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser')

const app = express(); // initialize express class

app.use(bodyParser.json())

app.use(cors());

var messages=[];

app.post("/guestbook/send-message", function (req, res) {
    var msg = req.body;

    // instantiate a new date object with current time
    msg.time= new Date();

    messages.push(msg);

    res.send(JSON.stringify(messages));
});

app.get("/guestbook/read-messages", function(req, res) {
    res.send(JSON.stringify(messages));
});


app.listen(60000, function () {
    console.log("Ready to listen...");
})