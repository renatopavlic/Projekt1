const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/current", (req, res)=>{
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
  request({
    url: `https://api.openweathermap.org/data/2.5/weather?q=Duga%20Resa&units=metric&appid=${process.env.API_KEY_WEATHER}`,
    json: true
  }, function(err, resp, body){
    if(err){
      console.error(err);
      res.json({
        msg:"nesto smo sjebali",
        error: err
      });
    } else {
      console.log(body);
      res.json({
        temperature: Math.round(body.main.temp),
        location: "Duga Resa"
      });
    }
  })
})
/*
  curl -H "Content-Type: application/json" -d "{\"a\":1, \"b\":2}" localhost:3003/api/weather/add
*/
router.post("/add", function(req, res){
  console.log(req.body);
  res.json({
    msg: req.body.a+req.body.b
  })
})
//For creating new accounts, user inputs basic information in order to register
module.exports = router;
