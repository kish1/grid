/**
 * Created by kishore on 12/4/16.
 */
"use strict";

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");

var dbConfig = require("./config.js").db;
var db = mysql.createConnection(dbConfig);
db.connect(function (err) {
    if (err) {
        console.log("Failed to connect to db:" + err);
    }
});

app.use(bodyParser.json());
app.use(express.static(__dirname + "/.."));

require("./app.js")(app, db);

var ipaddress = "127.0.0.1";
var port = 7200;

var server = app.listen(port, ipaddress);
server.on("close", function () {
    db.end();
});