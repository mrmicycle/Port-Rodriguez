var express = require('express');
var app = express();

var path = require('path');

module.exports = (app) => {
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
};