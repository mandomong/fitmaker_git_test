var express = require('express');
var router = express.Router();

// --- 11. 친구 요청 보내기 --- //

router.post('/', function (req, res, next) {
  res.json({
    "result": {
      "message": "친구 요청에 성공하였습니다..."
    }
  });
});


// --- 12. 친구 요청 응답하기 --- //
router.put('/:friend_id', function (req, res, next) {
  var friend_id = req.params.friend_id;

  res.json({
    "result": {
      "message": "친구의 요청에 대한 응답에 성공하였습니다..."
    }
  });

});

module.exports = router;