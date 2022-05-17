var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /*if(req.cookies.studentId) {
    console.log("Your student ID is: " + req.cookies.studentId);
    res.clearCookie('studentId');
  }else{
    res.cookie("studentId", 614185, {maxAge: 3 * 24 * 60 * 60 * 1000, signed: true});
    console.log("Cookie Created!");
  }*/
  if(req.session.studentId){
    console.log("I have your ID: " + req.session.studentId + ", " + req
    .session.cookie.expires);
  }else{
    console.log("I don't have your Id");
    req.session.studentId = 614185;
  }

  res.render('index');
});

module.exports = router;
