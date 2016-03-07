var express = require('express');
var router = express.Router();

// --- 2. 로그인 --- //
router.post('/login',function(req, res, next) {

  if(req.secure) {
    res.json({
      "result": {
        "message": "로그인이 정상적으로 처리되었습니다..."
      }
    });
  }else{
    var err = new Error('SSL/TLS Upgrade Required');
    err.status = 426;
    next(err);
  }

});


// --- 3. 페이스북 로그인 --- //
router.post('/facebook/token',function(req, res, next) {
  if(req.secure) {
    res.json({
      "result": {
        "message": "페이스북 로그인이 정상적으로 처리되었습니다..."
      }
    });
  }else{
    var err = new Error('SSL/TLS Upgrade Required');
    err.status = 426;
    next(err);
  }

});

// --- 4. 로그아웃 --- //
router.post('/logout',function(req, res, next) {


    res.json({
      "result": {
        "message": "로그아웃이 정상적으로 처리되었습니다..."
      }
    });

});


module.exports = router;
