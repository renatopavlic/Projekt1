const express = require("express");
const router = express.Router();


/*
  ucenje parametara na dva nacina
*/
router.get("/test", function(req, res){
  console.log("test param:", req.query.nekavar, req.query.drugavar);
  res.send("it's alive!");
})

router.get("/test2/:ovako", function(req, res){
  console.log("test param:", req.params.ovako);
  res.send("it's alive!");
})

module.exports = router;
