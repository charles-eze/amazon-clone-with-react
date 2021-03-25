const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const request = require('request');
const options = {
  method: 'GET',
  url: 'https://api.flutterwave.com/v3/transactions/${data.id}/verify', //Base url here
  headers: {
    ContentType: 'application/json',
    Authorization: 'Bearer '
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});

//API

//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('')

//Listen command
exports.api = functions.https.onRequest(app);