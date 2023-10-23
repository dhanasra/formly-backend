
const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require('body-parser');
const service = require('../services/auth');
const cors_origin = require("../core/cors_origin");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors_origin());

app.get("/ping", (req,res)=>res.send("success"));

module.exports.handler = serverless(app, {
    callbackWaitsForEmptyEventLoop: false
});