require('dotenv').config({
  path: (process.argv[2]!=null)?process.argv[2]:(__dirname + '/.env.development')
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./api');


app.use(express.static(__dirname + "/frontend/build"));  
app.use(bodyParser.json());
app.use("/api", api);

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));
