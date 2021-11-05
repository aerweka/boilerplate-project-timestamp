// server.js
// where your node app starts

// init project
// var express = require('express');
import express from 'express';
const app = express();
const port = 3000;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
// var cors = require('cors');
import cors from 'cors';
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// endpoints
app.get("/api/hello", function (req, res) {
  // res.json({greeting: 'hello API'});
  
  
  
  res.json(date.getTime());
});

app.get("/api/:date?", (req, res) => {
  const request = req.params.date;
  let date, unixTimestamps, utcTimestamps, response;
  
  date = new Date(request)
  
  if (!request) {
    date = new Date()
  } else if (!isNaN(Math.floor(Number(request) * 1000))) {
    date = new Date(Number(request))
  } else if (date == "Invalid Date") {
    response = {
      error: "Invalid Date"
    };
    res.json(response);
  } 

  unixTimestamps = date.getTime()
  utcTimestamps = date.toUTCString()
  
  response = {
    unix: unixTimestamps,
    utc: utcTimestamps
  }
  
  res.json(response);
})

app.get('/api/tes/:number?', (req, res) => {
  const request = req.params.number;

  let check = Math.floor(Number(request) * 1000)
  

  console.log(check);
})

// listen for requests :)
// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });
var listener = app.listen(port, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
