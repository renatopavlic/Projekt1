const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/test", function(req, res){
  res.send("it's alive!");
})

router.get("/current", (req, res)=>{
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
  request(`https://api.openweathermap.org/data/2.5/weather?q=Duga%20Resa&appid=${process.env.API_KEY_WEATHER}`, function(err, resp, body){
    if(err){
      console.error(err);
      res.json({
        msg:"nesto smo sjebali",
        error: err
      });
    } else {
      res.send(body);
    }
  })
})

router.post("/add", function(req, res){

})
//For creating new accounts, user inputs basic information in order to register
module.exports = router;
