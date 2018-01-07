const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    next();
  });

app.listen(3000, function() {
    console.log('Express app listening on port 3000')
  });