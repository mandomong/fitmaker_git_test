
var express = require('express');
var router = express.Router();

// --- 10. 요청 받은 친구 목록 --- //
router.get('/', function (req, res, next) {
  res.json({
    "result": {
      "message": "나에게 친구요청을 한 사람들의 목록을 가져왔습니다...",
      "friends": [
        {
          "friend_id": 10,
          "friend_name": "한솔",
          "friend_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/users_me_han.jpg",
          "state": 0
        },
        {
          "friend_id": 19,
          "friend_name": "혜선",
          "friend_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/users_me_sun.jpg",
          "state": 0
        }
      ]
    }
  });
});

module.exports = router;